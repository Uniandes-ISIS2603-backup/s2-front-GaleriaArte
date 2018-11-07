import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CvService } from '../cv.service';
@Component({
  selector: 'app-cv-detail',
  templateUrl: './cv-detail.component.html',
  styleUrls: ['./cv-detail.component.css']
})
export class CvDetailComponent implements OnInit {

  constructor(
    private cvService:CvService,
    private route: ActivatedRoute) { }

    cv_id: number;

  ngOnInit() {
    this.cv_id = +this.route.snapshot.paramMap.get('id');
  }

}
