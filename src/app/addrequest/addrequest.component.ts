import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
//import { observable } from 'rxjs/internal/symbol/observable';
import {Router} from '@angular/router';
import {DatePipe,formatDate } from '@angular/common';
import { dateformat } from 'dateformat';

@Component({
  selector: 'app-addrequest',
  templateUrl: './addrequest.component.html',
  styleUrls: ['./addrequest.component.css']
})
export class AddrequestComponent implements OnInit {
  
  
   nowDate = new Date();
   

  req={
    titel : '',
    add1 : '',
    add2 :'',
    n_add : '',
    phone : '',
    contact : '',
    discription : '',
    req_onewr: '',
    date: this.nowDate,
    vol_inneed: '',
    vol_inactual: '',
    req_status: false,
    image: '',
    
  }
 
itemList : AngularFireList<any>;
imageURL: string;
imgload: boolean = true;
  

  constructor(public db : AngularFireDatabase, public router:Router ) { 
   this.itemList=db.list("Requests");
   this.req.date = new Date;
  }

  ngOnInit() {
  }

  insertReq(){
   //formatDate(new Date(), 'yyyy/MM/dd', 'en'); 

   this.itemList.push({
    titel : this.req.titel,
    add1 : this.req.add1,
    add2 :this.req.add2,
    n_add : this.req.n_add,
    phone : this.req.phone,
    contact : this.req.contact,
    discription : this.req.discription,
    date: this.req.date.getDate(),
    vol_inneed: this.req.vol_inneed,
    vol_inactual: '',
    req_status: false ,
    image: '',
   })

this.router.navigate(['/viewrequests'])
console.log(this.req.date)
  }

  // upload(event) {
  //   const id = Math.random().toString(36).substring(2)
  //   this.afStorage.upload(id, event.target.files[0]).then(() => {
  //     this.ref = this.afStorage.ref(id)
  //     this.ref.getDownloadURL().subscribe(url => {
  //       console.log(url)

  //       if (url) {
  //         this.imageURL = url
  //         this.itemList.set(this.userKey, {
  //           name: this.data.name,
  //           age: this.data.age,
  //           phone: this.data.phone,
  //           address: this.data.address,
  //           city: this.data.city,
  //           job: this.data.job,
  //           email: this.email,
  //           uid: this.myid,
  //           image: this.imageURL
  //         })

  //       }
  //     })
  //   })

  // }


}
