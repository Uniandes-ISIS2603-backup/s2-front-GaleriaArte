import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {ExtraServiceService } from '../extraService.service';
import { ToastrService } from 'ngx-toastr';
import { ExtraService } from '../extraService';

@Component({
  selector: 'app-extraService-create',
  templateUrl: './extraService-add.component.html',
  styleUrls: ['./extraService-add.component.css'],
})
export class ExtraServiceCreateComponent implements OnInit {

  constructor(
    private extraServiceService: ExtraServiceService,
   private toastrService: ToastrService
  ) { }
    extraService: ExtraService;

    @Output() cancel = new EventEmitter();

    @Output() create = new EventEmitter();

 
  ngOnInit() {
    this.extraService= new ExtraService();
  }

}