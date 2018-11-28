import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CvService } from '../cv.service';
import { Cv } from '../cv';


@Component({
  selector: 'app-cv-create',
  templateUrl: './cv-create.component.html',
  styleUrls: ['./cv-create.component.css']
})
export class CvCreateComponent implements OnInit {

  constructor(
    private cvService: CvService,
   // private toastrService: ToastrService
  ) { }
    cv: Cv;

    @Output() cancel = new EventEmitter();

    @Output() create = new EventEmitter();

<<<<<<< HEAD
    
=======
    createCv(): Cv
    {
      console.log(this.cv);

      this.cvService.createCv(this.cv).subscribe((cv) => {this.cv=cv; this.create.emit(); 
        //this.toastrService.success("El cv fue creado", "Creacion de cv") 
      });

      return this.cv;
    }

    cancelCreation(): void{
      this.cancel.emit();
    }
>>>>>>> 279f51bab0513f68809de9efe7ec8e5443533efe
  ngOnInit() {
    this.cv= new Cv();
  }

}
