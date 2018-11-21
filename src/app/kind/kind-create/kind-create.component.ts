import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { KindService } from './../kind.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kind-create',
  templateUrl: './kind-create.component.html',
  styleUrls: ['./kind-create.component.css']
})
export class KindCreateComponent implements OnInit {

  constructor(
    private kindService: KindService,
    private router: Router,
    //private toastrService: ToastrService
  ) { }

  ngOnInit() {
  }

  kind:Kind

   /**
    * Cancels the creation of the new kind
    * Redirects to the kinds' list page
    */
   cancelCreation(): void {
    //this.toastrService.warning('The kind wasn\'t created', 'kind creation');
    this.router.navigate(['/kinds/list']);
  }
  createBook(): void {
    var kind_create = {
      name: this.kind.name,
      description: this.kind.description,
  };
  this.kindService.createKind(kind_create)
      .subscribe(kind => {
          this.router.navigate(['/kinds/' + kind.id + '/details']);
          this.toastrService.success("The kind was successfully created", 'kind creation');
      }, err => {
          this.toastrService.error(err, 'Error');
      });
}
}
  }
