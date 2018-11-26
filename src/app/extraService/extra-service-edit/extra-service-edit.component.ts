import {Component, OnInit, Input, OnChanges, Output, EventEmitter} from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import { ExtraServiceService } from '../extraService.service';
import { ExtraServiceDetail } from '../extraService-detail';
@Component({
  selector: 'app-extra-service-edit',
  templateUrl: './extra-service-edit.component.html',
  styleUrls: ['./extra-service-edit.component.css']
})
export class ExtraServiceEditComponent implements OnInit,OnChanges {

  constructor(
    private saleService: ExtraServiceService,
    private toastrService: ToastrService
  ) { }
  @Input() extraService: ExtraServiceDetail;


  @Output() update= new EventEmitter();
  @Output() cancel= new EventEmitter();

  editExtraService():void{
    this.saleService.updateExtraService(this.extraService).subscribe(()=>{
      this.toastrService.success("The extraservice was updated","Extra service edition");
    });
    this.update.emit();
  }

  cancelEdition():void{
    this.cancel.emit();
  }
  getExtraService():void{
    this.saleService.getExtraServiceDetail(this.extraService.id).subscribe(extraService=>{this.extraService=extraService});
  }
  ngOnInit() {
    this.extraService= new ExtraServiceDetail();
    this.getExtraService();
  }

  ngOnChanges()
  {
    this.ngOnInit();
  }
}
