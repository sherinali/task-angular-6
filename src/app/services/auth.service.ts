import { Injectable } from '@angular/core';
import { User } from 'src/app/register/user';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from "rxjs/operators";
import { auth } from 'firebase';
import { Router } from "@angular/router";
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
//import * as firebase from 'firebase/app';
import { AngularFireDatabase } from '@angular/fire/database';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
 
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: BehaviorSubject<User> = new BehaviorSubject(null)

constructor(public db:AngularFireDatabase, private fire:AngularFireAuth) {

    // this.fire.authState.pipe(switchMap(auth => {
    //   if (auth) {
    //     /// signed in
    //     return this.db.object('users/' + auth.uid)
    //   } else {
    //     /// not signed in
    //     return Observable.of(null)
    //   }
    // }) .subscribe(user => {
    //   this.user.next(user)
    // }))
    
    
}


    ///// SignIn - SignOut Process /////

    googleLogin() {
      // const provider = new firebase.auth.GoogleAuthProvider()
      // return this.fire.auth.signInWithPopup(provider)
      //   .then(credential =>  {
      //       this.updateUser(credential.user)
      //   })
    }

    signOut() {
      this.fire.auth.signOut()
    }

    //// Update user data ////

    /// updates database with user info after login
    /// only runs if user role is not already defined in database
    // private updateUser(authData) {
    //   const userData = new User(authData)
    //   const ref = this.db.object('users/' + authData.uid)
    //   ref.take(1)
    //      .subscribe(user => {
    //       if (!user.role) {
    //         ref.update(userData)
    //       }
    //   })

    // }
}


