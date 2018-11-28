import { Component, OnInit, Input, Output ,EventEmitter } from '@angular/core';
import { PaintworkService } from '../paintwork.service';
import { ToastrService } from 'ngx-toastr';
import { PaintworkDetail } from '../paintwork-detail';
import { Paintwork } from '../paintwork';

@Component({
  selector: 'app-paintwork-edit',
  templateUrl: './paintwork-edit.component.html',
  styleUrls: ['./paintwork-edit.component.css']
})
export class PaintworkEditComponent implements OnInit {

  /**
   * 
   * @param paintworkService 
   * @param toastrService 
   */
  constructor(
    private paintworkService : PaintworkService,
    private toastrService : ToastrService,
  ) { }

  /**
   * 
   */
  @Input() paintwork_id;

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
   * The paintwork who the user intends to update
   */
    paintwork:Paintwork;
    getPaintwork():void{
      this.paintworkService.getPaintwork(this.paintwork_id)
      .subscribe(paintwork => {
        this.paintwork = paintwork;
      }, err => {
        this.toastrService.error(err, "Error");
      });
    }

    editPaintwork():void{
      var paintwork_edit = {
        idPaintwork: this.paintwork_id,
        name: this.paintwork.name,
        description: this.paintwork.description
      };

      this.paintworkService.updatePaintwork(paintwork_edit)
      .subscribe(()=> {
        this.update.emit();
        this.toastrService.success("The paintworks's information was updated", "Author edition");
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
    this.paintwork = new Paintwork();
    this.getPaintwork();
  }
  /**
    * This function will be called when the user chooses another author to edit
    */
   ngOnChanges() {
    this.ngOnInit();
}

}
