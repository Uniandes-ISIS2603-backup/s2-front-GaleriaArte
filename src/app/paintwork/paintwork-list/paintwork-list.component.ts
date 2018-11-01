import { PaintworkService } from './../paintwork.service';
import { Component, OnInit } from '@angular/core';
import { Paintwork } from '../paintwork';

@Component({
  selector: 'app-paintwork-list',
  templateUrl: './paintwork-list.component.html',
  //styleUrls: ['./paintwork-list.component.css']
})
export class PaintworkListComponent implements OnInit {

  constructor(private paintwork : PaintworkService) { }

  paintworks:Paintwork[];

  getPaintworks():void{
    this.paintwork.getPaintworks().subscribe(paintwork=>{this.paintworks=paintwork;})
  }

  ngOnInit() {
    this.getPaintworks();
  }

}
