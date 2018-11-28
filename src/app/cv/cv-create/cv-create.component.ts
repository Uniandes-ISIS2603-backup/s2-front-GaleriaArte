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

    
  ngOnInit() {
   // this.feedback= new Feedback();
  }

}
