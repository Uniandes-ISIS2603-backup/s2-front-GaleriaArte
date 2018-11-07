import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DatePipe } from '@angular/common';

//import { ToastrService } from 'ngx-toastr';

import { BuyerService } from '../buyer.service';

import { Buyer } from '../buyer';

@Component({
    selector: 'app-buyer-create',
    templateUrl: './buyer-create.component.html',
    styleUrls: ['./buyer-create.component.css'],
    providers : [DatePipe]
})
export class BuyerCreateComponent implements OnInit {

    /**
    * Constructor for the component
    * @param buyerService The buyer's services provider
    * //param toastrService The toastr to show messages to the user
    */
    constructor(
        private dp : DatePipe,
        private buyerService: BuyerService,
       // private toastrService: ToastrService
    ) { }

    
    buyer: Buyer;

    
    @Output() cancel = new EventEmitter();

   
    @Output() create = new EventEmitter();

    
    createBuyer(): Buyer {
        console.log(this.buyer);
        console.log(this.buyer)
        this.buyerService.createBuyer(this.buyer)
            .subscribe((buyer) => {
                this.buyer = buyer;
                this.create.emit();
                //this.toastrService.success("The buyer was created", "buyer creation");
                
            });
            return this.buyer;
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
        this.buyer = new Buyer();
    }
}
