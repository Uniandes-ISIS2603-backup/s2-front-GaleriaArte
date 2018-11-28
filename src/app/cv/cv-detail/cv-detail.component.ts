import { cvDetail } from './../cv-detail';
import { Router , ActivatedRoute, NavigationEnd} from '@angular/router';
import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { CvService } from '../cv.service';
<<<<<<< HEAD
import { cvDetail } from '../cv-detail';
import { ToastrService } from 'ngx-toastr';
=======
>>>>>>> ee3501a9a174a30bdba496cf7fa1bbfc35930df0
import { Cv } from '../cv';

@Component({
  selector: 'app-cv-detail',
  templateUrl: './cv-detail.component.html',
  styleUrls: ['./cv-detail.component.css']
})
<<<<<<< HEAD
export class CvDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
        private cvService: CvService,
        private toastrService: ToastrService
        ) { }

     /**
    * El cv
    */
<<<<<<< HEAD
   cv : Cv;
=======
   @Input() cvDetail: cvDetail;
>>>>>>> 279f51bab0513f68809de9efe7ec8e5443533efe

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
=======
export class CvDetailComponent implements OnInit, OnDestroy {

  constructor(  
     private cvService : CvService,
     private route: ActivatedRoute,
     private router: Router
    ) {
      //This is added so we can refresh the view when one of the books in
        //the "Other books" list is clicked
        this.navigationSubscription = this.router.events.subscribe((e: any) => {
          if (e instanceof NavigationEnd) {
              this.ngOnInit();
          }
      });
     }

     cv_id:number;
     @Input() cv_detail:cvDetail;
     other_cvs: Cv[];
     navigationSubscription;

     getCvDetail():void{
      this.cvService.getCvDetail(this.cv_id)
      .subscribe(cv_detail =>{
        this.cv_detail = cv_detail;
      });
     }

     getOtherCv():void{
       this.cvService.getCvs()
       .subscribe(cvs=>{
         this.other_cvs = cvs;
         this.other_cvs = this.other_cvs.filter(cvs=> cvs.id !== this.cv_id);
       })
     }

  ngOnInit() {
    this.cv_id =+ this.route.snapshot.paramMap.get('id');
    this.cv_detail = new cvDetail();
    this.getCvDetail();
    this.getOtherCv();
  }
>>>>>>> ee3501a9a174a30bdba496cf7fa1bbfc35930df0

  ngOnDestroy() {
    if (this.navigationSubscription) {
        this.navigationSubscription.unsubscribe();
    }
}

}
