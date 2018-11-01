import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngbd-rating-basic',
  templateUrl: './ngbd-rating-basic.component.html',
  styleUrls: ['./ngbd-rating-basic.component.css']
})
export class NgbdRatingBasicComponent implements OnInit {

  constructor() { }
  
  currentRate = 8;

  ngOnInit() {
  }

}
