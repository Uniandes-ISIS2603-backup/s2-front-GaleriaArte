import { KindDetail } from './../kind-detail';
import { KindService } from './../kind.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { Kind } from '../kind';
declare var jquery:any;
declare var $ :any;
declare var M:any;

@Component({
  selector: 'app-kind-detail',
  templateUrl: './kind-detail.component.html',
  styleUrls: ['./kind-detail.component.css']
})
export class KindDetailComponent implements OnInit {

  constructor(
    private route : ActivatedRoute,
    private kindService: KindService
  ) { }

  @Input () kind : KindDetail;
   kindDetail:KindDetail;

    kinkId:number;


    getKindDetail():void{
      this.kindService.getKindDetail(this.kinkId).subscribe(kindDetail => {this.kindDetail = kindDetail});
    }
  ngOnInit() { 
    
    this.kinkId =+ this.route.snapshot.paramMap.get('id');
    this.kindDetail = new KindDetail();
    this.getKindDetail();
    $(document).ready(function(){
      $('.modal').modal();
    });
  }



}
