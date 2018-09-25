import { BrowserModule } from '@angular/platform-browser';
import { NgModule , NO_ERRORS_SCHEMA} from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ViewrequestsComponent } from './viewrequests/viewrequests.component';
import { AddrequestComponent } from './addrequest/addrequest.component';
import { VolunteersComponent } from './volunteers/volunteers.component';
import { AboutComponent } from './about/about.component';
import { SuccessComponent } from './success/success.component';

import { RouterModule, Routes } from '@angular/router';
import { Router } from '@angular/router/src/router';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NavbarModule, WavesModule, ButtonsModule } from 'angular-bootstrap-md'
const  routes:Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'viewrequests',component:ViewrequestsComponent},
  {path:'addrequest',component:AddrequestComponent},
  {path:'Volunteers',component:VolunteersComponent},
  {path:'Success',component:SuccessComponent},
  {path:'about',component:AboutComponent},
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
    SuccessComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
