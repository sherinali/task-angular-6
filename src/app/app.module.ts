import { BrowserModule } from '@angular/platform-browser';
import { NgModule , NO_ERRORS_SCHEMA} from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ViewrequestsComponent } from './viewrequests/viewrequests.component';
import { AddrequestComponent } from './addrequest/addrequest.component';
import { VolunteersComponent } from './volunteers/volunteers.component';
import { AboutComponent } from './about/about.component';
import { SuccessComponent } from './success/success.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component'

import { RouterModule, Routes } from '@angular/router';
import { Router } from '@angular/router/src/router';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NavbarModule, WavesModule, ButtonsModule } from 'angular-bootstrap-md';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
//import { DateModule } from 'core-js' ;
import { formatDate } from '@angular/common';
//import {DatePipe} from '@angular/common';
import { dateformat } from 'dateformat';


const  routes:Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'viewrequests',component:ViewrequestsComponent},
  {path:'addrequest',component:AddrequestComponent},
  {path:'Volunteers',component:VolunteersComponent},
  {path:'Success',component:SuccessComponent},
  {path:'about',component:AboutComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent}, 
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    ViewrequestsComponent,
    AddrequestComponent,
    VolunteersComponent,
    AboutComponent,
    SuccessComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    MDBBootstrapModule.forRoot(),
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    //DateModule,
   
    

  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
