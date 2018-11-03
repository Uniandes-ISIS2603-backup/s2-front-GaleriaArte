import { Component } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 's2-front-GaleriaArte';

  constructor() {
    const config = {
        apiKey: "AIzaSyDJacxBGo4GkvftCRjaOqRutgq6UlDkhzo",
        authDomain: "interart-f7a0b.firebaseapp.com",
        databaseURL: "https://interart-f7a0b.firebaseio.com",
        projectId: "interart-f7a0b",
        storageBucket: "",
        messagingSenderId: "222019207111"
    };
    firebase.initializeApp(config);
  }
}
