import { KindDetail } from './../kind-detail';
import { KindService } from './../kind.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { Kind } from '../kind';
import { ToastrService } from 'ngx-toastr';
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
    private kindService: KindService,
    private toastrService: ToastrService
  ) { }

  kind:Kind;

  kind_id:number;





    getKind():void{

      this.kindService.getKindDetail(this.kind_id)
      .subscribe(kind => {this.kind = kind}, err => {
        this.toastrService.error(err, "Error");
    });
    }


  ngOnInit() { 
    
    this.kind_id =+ this.route.snapshot.paramMap.get('id');
    this.kind = new Kind();
    this.getKind();
    $(document).ready(function(){
      $('.modal').modal();
    });
  }



}
