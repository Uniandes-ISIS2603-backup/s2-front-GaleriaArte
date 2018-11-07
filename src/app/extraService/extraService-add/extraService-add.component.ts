import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {ExtraServiceService } from '../extraService.service';
//import { ToastrService } from 'ngx-toastr';
import { ExtraService } from '../extraService';

@Component({
  selector: 'app-extraService-create',
  templateUrl: './extraService-create.component.html',
  styleUrls: ['./extraService-create.component.css'],
})
export class ExtraServiceCreateComponent implements OnInit {

  constructor(
    private extraServiceService: ExtraServiceService,
   // private toastrService: ToastrService
  ) { }
    extraSevice: ExtraService;

    @Output() cancel = new EventEmitter();

    @Output() create = new EventEmitter();

    createExtraService(): ExtraService
    {
      console.log(this.extraService);

      this extraServiceService.createExtraService(this.extraService).subscribe((extraService) => {this.extraService=extraService; this.create.emit(); 
        //this.toastrService.success("El comentario fue creado", "Creacion de comentario") 
      });

      return this.extraService ;
    }

 
  ngOnInit() {
   // this.feedback= new Feedback();
  }

}