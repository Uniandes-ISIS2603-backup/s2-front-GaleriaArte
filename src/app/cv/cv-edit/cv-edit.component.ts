import {Component, OnInit, Input, OnChanges, Output, EventEmitter} from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import { CvService } from '../cv.service';
import { cvDetail } from '../cv-detail';

@Component({
  selector: 'app-cv-edit',
  templateUrl: './cv-edit.component.html',
  styleUrls: ['./cv-edit.component.css']
})
export class CvEditComponent implements OnInit {

  constructor( private cvService: CvService,
    private toastrService: ToastrService
  ) { }

  @Input() cv: cvDetail;


  @Output() update= new EventEmitter();
  @Output() cancel= new EventEmitter();

  editCV():void{
    this.cvService.updateCV(this.cv).subscribe(()=>{
      this.toastrService.success("The cv was updated","CV edition");
    });
    this.update.emit();
  }

  cancelEdition():void{
    this.cancel.emit();
  }
  getCV():void{
    this.cvService.getCvDetail(this.cv.id).subscribe(cv=>{this.cv=cv});
  }
  ngOnInit() {
    this.cv= new cvDetail();
    this.getCV();
  }

  ngOnChanges()
  {
    this.ngOnInit();
  }

}
