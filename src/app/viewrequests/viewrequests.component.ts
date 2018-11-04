import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { dateformat } from 'dateformat';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFireStorageReference, AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
@Component({
  selector: 'app-viewrequests',
  templateUrl: './viewrequests.component.html',
  styleUrls: ['./viewrequests.component.css']
})
export class ViewrequestsComponent implements OnInit {
  
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
  itemList: AngularFireList<any>;
  itemArray = [];
  loaded:boolean=false

  constructor(public db: AngularFireDatabase) {

    this.itemList = db.list("Requests");
    this.itemList.snapshotChanges()
      .subscribe(actions=>{
            actions.forEach(action=>{
              let y = action.payload.toJSON()
              y["$key"] = action.key
              this.itemArray.push(y as ListItemClass)
              this.loaded=true 
  })
      })
      //console.log(this.req.req_date)
      console.log(this.itemArray)
      console.log(this.itemList) 

   }

  ngOnInit() {
  }

}
export class ListItemClass{
  $key: string;
  titel : string;
  add1 :  string;
  add2 : string;
  n_add :  string;
  phone : string;
  contact :  string;
  discription:string ;
  req_onewr:string ;
  req_date:number;
  vol_inneed: string;
  vol_inactual:string ;
  req_status: string;
  image:string ;

}