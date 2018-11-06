import { LoginComponent } from './login/login.component';
import { AuthService } from './services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 's2-front-GaleriaArte';

  constructor(private authService: AuthService ) {
  }
  
  
  onLogout(){
    this.authService.logOut();
  }

  
}
