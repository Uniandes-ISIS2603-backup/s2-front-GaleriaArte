import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute , Params} from '@angular/router';
@Component({
  selector: 'app-paintwork-edit',
  templateUrl: './paintwork-edit.component.html',
  styleUrls: ['./paintwork-edit.component.css']
})
export class PaintworkEditComponent implements OnInit {

  constructor(private route:ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.snapshot.params['']
  }

}
