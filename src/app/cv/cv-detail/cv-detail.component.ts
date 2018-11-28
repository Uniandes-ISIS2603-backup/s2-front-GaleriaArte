import { cvDetail } from './../cv-detail';
import { Router , ActivatedRoute, NavigationEnd} from '@angular/router';
import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { CvService } from '../cv.service';
import { Cv } from '../cv';

@Component({
  selector: 'app-cv-detail',
  templateUrl: './cv-detail.component.html',
  styleUrls: ['./cv-detail.component.css']
})
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

  ngOnDestroy() {
    if (this.navigationSubscription) {
        this.navigationSubscription.unsubscribe();
    }
}

}
