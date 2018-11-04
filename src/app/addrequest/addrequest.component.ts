import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import {FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

//import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireStorageReference, AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
//import { observable } from 'rxjs/internal/symbol/observable';
import { Router } from '@angular/router';
import { DatePipe, formatDate } from '@angular/common';
import { dateformat } from 'dateformat';


@Component({
  selector: 'app-addrequest',
  templateUrl: './addrequest.component.html',
  styleUrls: ['./addrequest.component.css']
})
export class AddrequestComponent implements OnInit {

  date: string;

  itemList: AngularFireList<any>;
  itemArray = [];
  ref: AngularFireStorageReference;
  downloadURL: Observable<string>;
  imageURL: string;
    
  //nowDate  = new Date();
  postDate: number = Date.now(); // date of req.
  
  req = {
    titel: '',
    add1: '',
    add2: '',
    n_add: '',
    phone: '',
    contact: '',
    discription: '',
    req_onewr: '',
    req_date: this.postDate,
    vol_inneed: '',
    vol_inactual: '',
    req_status: false,
    image: '',
  }



  constructor(public db: AngularFireDatabase, private afStorage: AngularFireStorage, public router: Router, private datePipe: DatePipe) {
   
    this.itemList = db.list("Requests");
    
  }

  ngOnInit() {
    this.date = this.datePipe.transform(new Date(), 'dd-MM-yy');
  }
  
  //function to insert req. info.
  insertReq() {

      this.itemList.push({
      titel: this.req.titel,
      add1: this.req.add1,
      add2: this.req.add2,
      n_add: this.req.n_add,
      phone: this.req.phone,
      contact: this.req.contact,
      discription: this.req.discription,
      req_date: this.req.req_date,  
      vol_inneed: this.req.vol_inneed,
      vol_inactual: '',
      req_status: false,
      image:this.req.image,
    })

    this.router.navigate(['/viewrequests'])
    console.log(this.req)
  }

  //function to upload image.
  upload(event) {
    const id = Math.random().toString(36).substring(2)
    this.afStorage.upload(id, event.target.files[0]).then(() => {
      this.ref = this.afStorage.ref(id)
      this.ref.getDownloadURL().subscribe(url => {
        console.log(url)

        if (url) {
          this.imageURL = url
          this.req.image = url
                  }
      })
    })

  }


}
