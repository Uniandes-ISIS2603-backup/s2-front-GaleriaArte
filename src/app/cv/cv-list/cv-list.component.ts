import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { CvService } from '../cv.service';
import { ToastrService } from 'ngx-toastr';
import { ModalDialogService, SimpleModalComponent } from 'ngx-modal-dialog';
import { Cv } from '../cv';

@Component({
  selector: 'app-cv-list',
  templateUrl: './cv-list.component.html',
  styleUrls: ['./cv-list.component.css']
})
export class CvListComponent implements OnInit {

  constructor(
    private cvService: CvService,
    private toastrService: ToastrService,
    private modalDialogService: ModalDialogService,
    private viewRef: ViewContainerRef
  ) { }

   /**
    * Shows or hides the cv-create-component
    */
   showCreate: boolean;

   /**
   * Shows or hides the edition of an cv
   */
   showEdit: boolean;

   /**
   * The id of the cv that the user wants to edit
   */
   edit_cv_id: number;

   /**
    * The list of authors which belong to the BookStore
    */
   cvs: Cv[];

   /**
   * Asks the service to update the list of cvs
   */

  getCvs(): void {
    this.cvService.getCvs()
        .subscribe(cvs => {
            this.cvs = cvs;
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
showEditCv(id): void {
    if (this.showCreate) {
        this.showCreate = false;
    }
    this.showEdit = true;
    this.edit_cv_id = id;
}

/**
* Hides the edit component
*/
hideEditAuthor(): void {
    this.showEdit = false;
    this.edit_cv_id = undefined;
}

/**
* Deletes an author
*/
deleteCv(cvId): void {
    this.modalDialogService.openDialog(this.viewRef, {
        title: 'Delete an author',
        childComponent: SimpleModalComponent,
        data: { text: 'Are you sure your want to delete this author and all of their books from the BookStore?' },
        actionButtons: [
            {
                text: 'Yes',
                buttonClass: 'btn btn-danger',
                onAction: () => {
                    this.cvService.deletecv(cvId).subscribe(books => {
                        this.toastrService.error("The CV and all their books were deleted from the BookStore", "Author deleted");
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

/**
* This function will initialize the component
*/
ngOnInit() {
    this.showCreate = false;
    this.showEdit = false;
    this.edit_cv_id = undefined;
    this.getCvs();
}

}
