import { Cv } from 'src/app/cv/cv';
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

  @Input () cv_id
  @Input() cv: cvDetail;


  @Output() update= new EventEmitter();
  @Output() cancel= new EventEmitter();

  getCv(): void{
    this.cvService.getCv(this.cv_id)
    .subscribe(cv => {
      this.cv = cv;
    }, err => {
      this.toastrService.error(err, "Error");
  });
  }

  editCV():void{
    var cv_edit={
      id: this.cv.id,
      education: this.cv.education,
      nombreObraMasConocida: this.cv.nombreObraMasConocida,
      informacionAdicional: this.cv.informacionAdicional
    };
    this.cvService.updatecv(cv_edit)
    .subscribe(() => {
      this.toastrService.success("The author's information was updated", "Author edition");
      this.update.emit()}
      , err => {
        this.toastrService.error(err, "Error");
    });
  }

  cancelEdition():void{
    this.cancel.emit();
  }
  
  ngOnInit() {
    this.cv= new Cv();
    this.getCv()
  }

  ngOnChanges()
  {
    this.ngOnInit();
  }

}
