import { Component, OnInit } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import *as Firebase from 'Firebase/app';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
  itemList: AngularFireList<any>;
  user: Observable<Firebase.User>;
  public IsLoggedIn: Boolean = false;
  email: string = '';
  password: string = '';

  constructor(public db: AngularFireDatabase, private fire: AngularFireAuth, private router: Router) {
    this.itemList = db.list('users');
    let status = localStorage.getItem('isLoggedIn')

    setInterval(() => {
      status = localStorage.getItem('IsLoggedIn');
      this.IsLoggedIn = status === 'true';
    }, 1000);


    if (status === 'true') {
      this.IsLoggedIn = true;
    } else {
      this.IsLoggedIn = false;
    }

  }

  ngOnInit() {
    console.log(this.IsLoggedIn)
    console.log(status)
  }

  logOut() {
    this.fire.auth.signOut();
    this.IsLoggedIn = false;
    localStorage.setItem('IsLoggedIn', 'false')
    localStorage.setItem('email', '')
    localStorage.setItem('uid', '')
    console.log(this.IsLoggedIn);
    this.router.navigate(['/home']);

  }

}
