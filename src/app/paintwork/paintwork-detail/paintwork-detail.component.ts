import { PaintworkDetail } from './../paintwork-detail';
import { Router , ActivatedRoute, NavigationEnd} from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { PaintworkService } from '../paintwork.service';
import { Paintwork } from '../paintwork';

@Component({
  selector: 'app-paintwork-detail',
  templateUrl: './paintwork-detail.component.html',
  styleUrls: ['./paintwork-detail.component.css']
})
export class PaintworkDetailComponent implements OnInit, OnDestroy {

  constructor(  
     private paintworService : PaintworkService,
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

     paintwork_id:number;
     paintwork_detail:PaintworkDetail;
     other_paintworks: Paintwork[];
     navigationSubscription;

     getPaintworkDetail():void{
      this.paintworService.getPaintworkDetail(this.paintwork_id)
      .subscribe(paintwork_detail =>{
        this.paintwork_detail = paintwork_detail;
      });
     }

     getOtherPaintwork():void{
       this.paintworService.getPaintworks()
       .subscribe(paintworks=>{
         this.other_paintworks = paintworks;
         this.other_paintworks = this.other_paintworks.filter(paintworks=> paintworks.idPaintwork !== this.paintwork_id);
       })
     }

  ngOnInit() {
    this.paintwork_id =+ this.route.snapshot.paramMap.get('id');
    this.paintwork_detail = new PaintworkDetail();
    this.getPaintworkDetail();
    this.getOtherPaintwork();
  }

  ngOnDestroy() {
    if (this.navigationSubscription) {
        this.navigationSubscription.unsubscribe();
    }
}

}
