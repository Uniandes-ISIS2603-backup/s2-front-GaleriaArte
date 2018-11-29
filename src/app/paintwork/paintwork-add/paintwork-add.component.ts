import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {PaintworkService} from '../paintwork.service';
import {Paintwork} from '../paintwork';

@Component({
    selector: 'app-paintwork-add',
    templateUrl: './paintwork-add.component.html',
    styleUrls: ['./paintwork-add.component.css'],
    providers: []
})
export class PaintworkAddComponent implements OnInit {

    /**
    * Constructor for the component
    * @param dp DatePipe to format the date.
    * @param paintworkService The paintwork's services provider
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private paintworkService: PaintworkService,
        private toastrService: ToastrService
    ) {}

    /**
    * The new paintwork
    */
    paintwork: Paintwork;

    /**
    * The output which tells the parent component
    * that the user no longer wants to create an paintwork
    */
    @Output() cancel = new EventEmitter();

    /**
    * The output which tells the parent component
    * that the user created a new paintwork
    */
    @Output() create = new EventEmitter();

    /**
    * Adds a paintwork
    */
    createPaintwork(): Paintwork {
      this.paintwork.country = 'Colombia';
        this.paintworkService.createPaintwork(this.paintwork)
            .subscribe((paintwork) => {
                this.paintwork = paintwork;
                this.create.emit();
                //this.toastrService.success("The paintwork was created", "Paintwork creation");

            });
        return this.paintwork;
    }

    /**
    * Emits the signal to tell the parent component that the
    * user no longer wants to create an user
    */
    cancelCreation(): void {
        this.cancel.emit();
    }

    /**
    * This function will initialize the component
    */
    ngOnInit() {
        this.paintwork = new Paintwork();
    }

}