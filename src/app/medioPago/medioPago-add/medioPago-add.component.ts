import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {MedioPagoService } from '../medioPago.service';
//import { ToastrService } from 'ngx-toastr';
import { MedioPago } from '../medioPago';

@Component({
  selector: 'app-medioPago-create',
  templateUrl: './medioPago-add.component.html',
  styleUrls: ['./medioPago-add.component.css'],
})
export class MedioPagoCreateComponent implements OnInit {

  constructor(
    private medioPagoService: MedioPagoService,
   // private toastrService: ToastrService
  ) { }
    medioPago: MedioPago;

    @Output() cancel = new EventEmitter();

    @Output() create = new EventEmitter();

    createMedioPago(): MedioPago
    {
      console.log(this.medioPago);

      this.medioPagoService.createMedioPago(this.medioPago).subscribe((medioPago) => {this.medioPago=medioPago; this.create.emit(); 
        //this.toastrService.success("El comentario fue creado", "Creacion de comentario") 
      });

      return this.medioPago ;
    }

 
  ngOnInit() {
   // this.feedback= new Feedback();
  }

}