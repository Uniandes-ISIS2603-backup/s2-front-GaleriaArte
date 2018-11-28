import {Component, OnInit, Input, OnChanges, Output, EventEmitter} from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import { CvService } from '../cv.service';
import { cvDetail } from '../cv-detail';

@Component({
  selector: 'app-cv-edit',
  templateUrl: './cv-edit.component.html',
  styleUrls: ['./cv-edit.component.css']
})
export class CvEditComponent implements OnInit {

  constructor( private cvService: CvService,
    private toastrService: ToastrService
  ) { }

  @Input() cv: cvDetail;


  @Output() update= new EventEmitter();
  @Output() cancel= new EventEmitter();

  editCV():void{
    this.cvService.updatecv(this.cv).subscribe(()=>{
      this.toastrService.success("The cv was updated","CV edition");
    });
    this.update.emit();
  }

  cancelEdition():void{
    this.cancel.emit();
  }
  
  ngOnInit() {
    this.cv= new cvDetail();
  }

  ngOnChanges()
  {
    this.ngOnInit();
  }

}
