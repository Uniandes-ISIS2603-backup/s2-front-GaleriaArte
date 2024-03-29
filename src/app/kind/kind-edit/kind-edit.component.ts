import { Component, OnInit, Input, Output ,EventEmitter } from '@angular/core';
import { KindService } from '../kind.service';
import { ToastrService } from 'ngx-toastr';
import { KindDetail } from '../kind-detail';
import { Kind } from '../kind';

@Component({
  selector: 'app-kind-edit',
  templateUrl: './kind-edit.component.html',
  styleUrls: ['./kind-edit.component.css']
})
export class KindEditComponent implements OnInit {

  /**
   * 
   * @param kindService 
   * @param toastrService 
   */
  constructor(
    private kindService : KindService,
    private toastrService : ToastrService,
  ) { }

  /**
   * 
   */
  @Input() kind_id;

   /**
    * The output which tells the parent component
    * that the user no longer wants to create an author
    */
   @Output() cancel = new EventEmitter();

   /**
   * The output which tells the parent component
   * that the user updated a new author
   */
   @Output() update = new EventEmitter();

   /**
   * The kind who the user intends to update
   */
    kind:Kind;
    getKind():void{
      this.kindService.getKind(this.kind_id)
      .subscribe(kind => {
        this.kind = kind;
      }, err => {
        this.toastrService.error(err, "Error");
      });
    }

    editKind():void{
      var kind_edit = {
        idType: this.kind.idType,
        name: this.kind.name,
        description: this.kind.description
      };

      this.kindService.updateKind(kind_edit)
      .subscribe(()=> {
        this.update.emit();
        this.toastrService.success("The kinds's information was updated", "Author edition");
      }, err => {
        this.toastrService.error(err, "Error");
    });
    }

    /**
    * Emits the signal to tell the parent component that the
    * user no longer wants to create an user
    */
   cancelEdition(): void {
    this.cancel.emit();
   }

  ngOnInit() {
    this.kind = new Kind();
    this.getKind();
  }
  /**
    * This function will be called when the user chooses another author to edit
    */
   ngOnChanges() {
    this.ngOnInit();
}

}
