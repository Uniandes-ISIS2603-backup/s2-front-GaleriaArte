import { KindService } from './../kind.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Kind } from '../kind';

@Component({
  selector: 'app-kind-list',
  templateUrl: './kind-list.component.html',
  styleUrls: ['./kind-list.component.css']
})
export class KindListComponent implements OnInit {

  constructor(
    private kindService : KindService,
    private toasrtService : ToastrService
  ) { }

  kinds : Kind[];

  getKinds():void{
    this.kindService.getKinds().subscribe(kinds => {this.kinds= kinds;})
  }
  ngOnInit() {
    this.getKinds();
  }

}
