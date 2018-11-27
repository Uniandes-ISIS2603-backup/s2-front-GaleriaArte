import { Component, OnInit, Input, Output } from '@angular/core';
import { KindService } from '../kind.service';
import { ToastrService } from 'ngx-toastr';
import { KindDetail } from '../kind-detail';
import { EventEmitter } from 'protractor';
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
  @Input() kindId;

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
      this.kindService.getKind(this.kindId)
      .subscribe(kind => {
        this.kind = kind;
      }, err => {
        this.toastrService.error(err, "Error");
      });
    }
    




  ngOnInit() {
  }

}
