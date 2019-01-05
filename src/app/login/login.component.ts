import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  IsLoggedIn: boolean = false;
  uid: any;
  constructor(private fire: AngularFireAuth, private router: Router) {

   }

  ngOnInit() {
  }
myLogin() {

    this.fire.auth.signInWithEmailAndPassword(this.email, this.password)
      .then(user => {
        this.IsLoggedIn = true;
        console.log(this.email, this.password)
        localStorage.setItem('IsLoggedIn', 'true')
        localStorage.setItem('email', this.fire.auth.currentUser.email)
        this.fire.authState.subscribe(auth => {
          if (auth) {
            localStorage.setItem('uid', auth.uid)

          }
        })
        console.log(this.IsLoggedIn)
        this.router.navigate(['/home'])
      }).catch(error => {
        console.error(error)
      })

  }

  
}
