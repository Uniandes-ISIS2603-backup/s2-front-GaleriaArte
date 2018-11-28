import {Component, OnInit, Input, OnChanges, Output, EventEmitter} from '@angular/core';
import { MedioPagoService } from '../medioPago.service';
import {ToastrService} from 'ngx-toastr';
import { MedioPagoDetail } from '../medioPago-detail';
import { MedioPago } from '../medioPago';

@Component({
  selector: 'app-medio-pago-edit',
  templateUrl: './medio-pago-edit.component.html',
  styleUrls: ['./medio-pago-edit.component.css']
})
export class MedioPagoEditComponent implements OnInit,OnChanges {

  constructor(
    private medioPagoService: MedioPagoService,
    private toastrService: ToastrService

  ) { }
    @Input() medioPago: MedioPagoDetail;
    @Output() update= new EventEmitter();
    @Output() cancel= new EventEmitter();

    cancelEdition():void{
      this.cancel.emit();
    }

    editMedioPago():void{
      this.medioPagoService.updateMedioPago(this.medioPago).subscribe(()=>{
        this.toastrService.success("The medioPago was updated","medioPago edition");
      });
      this.update.emit();
    }

    getMedioPago():void{
      this.medioPagoService.getMedioPagoDetail(this.medioPago.id).subscribe(medioPago=>{this.medioPago=medioPago});
    }
  ngOnInit() {
    this.getMedioPago();
  }

  ngOnChanges()
  {
this.ngOnInit();
  }

}
