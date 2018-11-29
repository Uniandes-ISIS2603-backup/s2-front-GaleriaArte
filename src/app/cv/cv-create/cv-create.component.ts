import { Component, OnInit, Output, EventEmitter, NgModule } from '@angular/core';
import { CvService } from '../cv.service';
import { Cv } from '../cv';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-cv-create',
  templateUrl: './cv-create.component.html',
  styleUrls: ['./cv-create.component.css']
})
export class CvCreateComponent implements OnInit {

  constructor(
    private cvService: CvService,
    private toastrService: ToastrService

   // private toastrService: ToastrService
  ) { }

    cv: Cv;

    @Output() cancel = new EventEmitter();

    @Output() create = new EventEmitter();

    /**
    * Creates an cv
    */
   createCv(): void {
    var cv_create = {
        name: this.cv.id,
        education: this.cv.education,
        informacionAdicional: this.cv.informacionAdicional,
        nombreObraMasConocida: this.cv.nombreObraMasConocida
    };
    this.cvService.createCv(cv_create)
        .subscribe(() => {
            this.create.emit();
            this.toastrService.success("The cv was created", "cv creation");
        }, err => {
            this.toastrService.error(err, "Error");
        });
}
    
  ngOnInit() {
    this.cv= new Cv();
  }

}
