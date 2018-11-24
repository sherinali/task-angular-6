import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase ,AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  email:string = '';
  username : string;
  password :string ='';

  itemList: AngularFireList<any>
  IsLoggedIn: boolean = false; 

  constructor(public db:AngularFireDatabase, private fire:AngularFireAuth , private router:Router) { 
    this.itemList = db.list('users')
    this.itemList = db.list('Requests')
  }

  ngOnInit() {
  }
  myRegister(){
    this.fire.auth.createUserWithEmailAndPassword(this.email, this.password)
    .then(user =>{
     // console.log(this.email, this.password)
     this.IsLoggedIn = true;
      localStorage.setItem('IsLoggedIn','true')
      localStorage.setItem('email',this.fire.auth.currentUser.email )

      this.fire.authState.subscribe(auth=>{
        if(auth){
  localStorage.setItem('uid',auth.uid )
  
  this.itemList.push({
    email: this.email ,
    uid : auth.uid,
    password : '',
    role :'',
    fullname : ''  ,
    phone :  '' ,
    othercontact :'',
    age : '' ,
    gender:  '',
    image:'',
  })
        }
      })
      
      this.router.navigate(['/home'])
     }).catch(error=>{
      console.error(error)
     })
  }
}
