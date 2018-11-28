import { ModalDialogService , SimpleModalComponent } from 'ngx-modal-dialog';
import { KindService } from './../kind.service';
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Kind } from '../kind';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kind-list',
  templateUrl: './kind-list.component.html',
  styleUrls: ['./kind-list.component.css']
})
export class KindListComponent implements OnInit {

  constructor(
    private router : Router,
    private kindService : KindService,
    private toastrService : ToastrService,
    private modalDialogService: ModalDialogService,
    private viewRef: ViewContainerRef
  ) { }

  /**
   * 
   */
  kinds : Kind[];

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
   edit_kind_id: number;

   /**
   * Asks the service to update the list of authors
   */

  getKinds():void{
    this.kindService.getKinds()
    .subscribe(kinds => {
      this.kinds= kinds;
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
showEditKind(id): void {
    if (this.showCreate) {
        this.showCreate = false;
    }
    this.showEdit = true;
    this.edit_kind_id = id;
}

/**
* Hides the edit component
*/
hideEditKind(): void {
    this.showEdit = false;
    this.edit_kind_id = undefined;
}

/**
    * Deletes an author
    */
   deleteKind(kindId): void {
    this.modalDialogService.openDialog(this.viewRef, {
        title: 'Delete a kind',
        childComponent: SimpleModalComponent,
        data: { text: 'Are you sure you want to delete this kind ?' },
        actionButtons: [
            {
                text: 'Yes',
                buttonClass: 'btn btn-danger',
                onAction: () => {
                    this.kindService.deleteKind(kindId).subscribe(kinds => {
                        this.toastrService.error("The Kind will be delete", "Kind deleted");
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

btnClick(kindId) {
  this.router.navigateByUrl('/kinds/detail/'+kindId);
};

  /**
   * 
   */
  ngOnInit() {
    this.showCreate = false;
    this.showEdit = false;
    this.edit_kind_id = undefined;
    this.getKinds();
  }

}
