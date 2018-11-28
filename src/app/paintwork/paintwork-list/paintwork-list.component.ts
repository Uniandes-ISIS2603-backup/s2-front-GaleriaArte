import { ModalDialogService , SimpleModalComponent } from 'ngx-modal-dialog';
import { PaintworkService } from './../paintwork.service';
import { Component, OnInit, ViewContainerRef, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Paintwork } from '../paintwork';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paintwork-list',
  templateUrl: './paintwork-list.component.html',
  styleUrls: ['./paintwork-list.component.css']
})
export class PaintworkListComponent implements OnInit {

  constructor(
    private router : Router,
    private paintworkService : PaintworkService,
    private toastrService : ToastrService,
    private modalDialogService: ModalDialogService,
    private viewRef: ViewContainerRef
  ) { }

  /**
   * 
   */
@Input() paintworks : Paintwork[];

  /**
    * Shows or hides the author-create-component
    */
   showCreate: boolean;

   /**
   * Shows or hides the edition of an author
   */
   showEdit: boolean;

   /**
   * The id of the author that the user wants to edit
   */
   edit_paintwork_id: number;

   /**
   * Asks the service to update the list of authors
   */

  getPaintworks():void{
    this.paintworkService.getPaintworks()
    .subscribe(paintworks => {
      this.paintworks= paintworks;
    }, err => {
      this.toastrService.error(err, "Error");
  });
  }

  /**
    * Shows or hides the create component
    */
   showHideCreate(): void {
    if (this.showEdit) {
        this.showEdit = false;
    }
    this.showCreate = !this.showCreate!
}

/**
* Shows the edit component
*/
showEditPaintwork(id): void {
    if (this.showCreate) {
        this.showCreate = false;
    }
    this.showEdit = true;
    this.edit_paintwork_id = id;
}

/**
* Hides the edit component
*/
hideEditPaintwork(): void {
    this.showEdit = false;
    this.edit_paintwork_id = undefined;
}

/**
    * Deletes an author
    */
   deletePaintwork(paintworkId): void {
    this.modalDialogService.openDialog(this.viewRef, {
        title: 'Delete a paintwork',
        childComponent: SimpleModalComponent,
        data: { text: 'Are you sure you want to delete this paintwork ?' },
        actionButtons: [
            {
                text: 'Yes',
                buttonClass: 'btn btn-danger',
                onAction: () => {
                    this.paintworkService.deletePaintwork(paintworkId).subscribe(paintworks => {
                        this.toastrService.error("The Paintwork will be delete", "Paintwork deleted");
                        this.ngOnInit();
                    }, err => {
                        this.toastrService.error(err, "Error");
                    });
                    return true;
                }
            },
            { text: 'No', onAction: () => true }
        ]
    });
}

btnClick(paintworkId) {
  this.router.navigateByUrl('/paintwork/'+paintworkId);
};

  /**
   * 
   */
  ngOnInit() {
    this.showCreate = false;
    this.showEdit = false;
    this.edit_paintwork_id = undefined;
    this.getPaintworks();
  }
}
