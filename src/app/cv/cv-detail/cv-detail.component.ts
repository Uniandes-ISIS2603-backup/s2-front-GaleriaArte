import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CvService } from '../cv.service';
import { cvDetail } from '../cv-detail';

@Component({
  selector: 'app-cv-detail',
  templateUrl: './cv-detail.component.html',
  styleUrls: ['./cv-detail.component.css']
})
export class CvDetailComponent implements OnInit {

  constructor(
    private cvService:CvService,
    private route: ActivatedRoute) { }

     /**
    * El cv
    */
   cvDetail: cvDetail;

   /**
   * El id del cv que viene en el path get .../cv/cv_id
   */
   cv_id: number;
   /**
   * The method which obtains el cv whose details we want to show
   */
   getCvDetail(): void 
       {
       this.cvService.getCvDetail(this.cv_id)
           .subscribe(cvDetail => {
               this.cvDetail = cvDetail
           });
   }

  
   /**
   * The method which initializes the component.
   * We need to create el cv so it is never considered as undefined
   */

  ngOnInit() {
    this.cv_id = +this.route.snapshot.paramMap.get('id');
    this.cvDetail = new cvDetail();
    this.getCvDetail();
  }

}
