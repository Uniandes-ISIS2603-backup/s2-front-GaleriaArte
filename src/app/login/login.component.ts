import { Component, OnInit } from '@angular/core';
// import * as firebase from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  public userNombre:string;
  public userEmail:string;
  public userPicture:string;
  public userI:string;
  public isLogin:boolean;
  ngOnInit() {
  }

  // onClickGoogleLogin(){
  //   this.authService.loginGoogle()
  //   .then((res)=>{
  //     console.log(res);
  //   }).catch(err =>console.log(err.message) )
  // }

  // onComprobarUserLogin(){
  //   let config = {
  //     apiKey: "AIzaSyDJacxBGo4GkvftCRjaOqRutgq6UlDkhzo",
  //     authDomain: "interart-f7a0b.firebaseapp.com",
  //     databaseURL: "https://interart-f7a0b.firebaseio.com",
  //     projectId: "interart-f7a0b",
  //     storageBucket: "interart-f7a0b.appspot.com",
  //     messagingSenderId: "222019207111"
  //   };
  //   firebase.initializeApp(config);
  //   firebase.auth().onAuthStateChanged(function(user) {
  //     if (user) {
  //       this.isLogin=true;
  //       this.userName=user.displayName;
  //       this.userPicture=user.photoURL;
  //     } else {
  //       // No user is signed in.
  //     }
  //   });
  // }
}
