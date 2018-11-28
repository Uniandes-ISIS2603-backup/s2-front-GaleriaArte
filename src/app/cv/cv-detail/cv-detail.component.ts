import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CvService } from '../cv.service';
import { cvDetail } from '../cv-detail';
import { ToastrService } from 'ngx-toastr';
import { Cv } from '../cv';

@Component({
  selector: 'app-cv-detail',
  templateUrl: './cv-detail.component.html',
  styleUrls: ['./cv-detail.component.css']
})
export class CvDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
        private cvService: CvService,
        private toastrService: ToastrService
        ) { }

     /**
    * El cv
    */
   cv : Cv;

   /**
   * El id del cv que viene en el path get .../cv/cv_id
   */
   cv_id: number;
   /**
   * The method which obtains el cv whose details we want to show
   */

   /**
    * The function which obtains the author whose details we want to show
    */
   getCv(): void {
    this.cvService.getCv(this.cv_id)
        .subscribe(cv => {
            this.cv = cv
        }, err => {
            this.toastrService.error(err, "Error");
        });
}


  
   /**
    * The function which initializes the component.
    */
   ngOnInit() {
    this.cv_id = +this.route.snapshot.paramMap.get('id');
    this.cv = new Cv();
    this.getCv();
}

}
