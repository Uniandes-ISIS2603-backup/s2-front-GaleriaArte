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
    * El servicio extra
    */
   cvDetail: cvDetail;

   /**
   * El id del servicio extra que viene en el path get .../extraService/extraService_id
   */
   extraService_id: number;
   /**
   * The method which obtains el medio de Pago whose details we want to show
   */
   getExtraServiceDetail(): void 
       {
       this.extraServiceService.getExtraServiceDetail(this.extraService_id)
           .subscribe(extraServiceDetail => {
               this.extraServiceDetail = extraServiceDetail
           });
   }

  
   /**
   * The method which initializes the component.
   * We need to create el servicio extra so it is never considered as undefined
   */

  ngOnInit() {
    this.cv_id = +this.route.snapshot.paramMap.get('id');
  }

}
