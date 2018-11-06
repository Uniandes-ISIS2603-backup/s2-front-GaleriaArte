import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth : AngularFireAuth ) { }

  loginGoogle(){
    return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
  logOut(){
    return this.afAuth.auth.signOut();
  }
  getAuth(){ 
   return this.afAuth.authState.pipe(map(data=>{})).subscribe(result =>{ console.log(result)});
  }

}
