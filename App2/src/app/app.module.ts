import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { SalutationPipe } from './salutation.pipe';
import { PositionPipe } from './position.pipe';
import { HttpModule } from '@angular/Http';
import { HttpcomponentComponent } from './httpcomponent/httpcomponent.component';
import { HttpclientcomponentComponent } from './httpclientcomponent/httpclientcomponent.component';
import { HttpClientModule } from '@angular/common/http';
import { Vote1Component } from './vote1/vote1.component';
import { Vote2Component } from './vote2/vote2.component';
import { ResComponent } from './res/res.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TestserviceService } from './testservice.service';
import { EmpDetailsComponent } from './employee/emp-details/emp-details.component';
import { Res2Component } from './res2/res2.component';
import { ReactivePageComponent } from './reactive-page/reactive-page.component';
import { CRUDLSComponent } from './crud-ls/crud-ls.component';
import { CustomDirDirective } from './custom-dir.directive';

const appRoutes:Routes=[
  {path:'home', component:HomeComponent},
  {path:'emp', component:EmployeeComponent},
  {path:'birds', component:HttpcomponentComponent},
  {path:'res', component:ResComponent},
  {path:'reactive', component:ReactivePageComponent},
  {path:'curd', component:CRUDLSComponent},
  {path: 'res/:id',component:Res2Component,pathMatch:'full'},
  {path:'emp/:code', component:EmpDetailsComponent, pathMatch:'full'},
  {path:'', redirectTo:'/emp', pathMatch:'full'},
  {path:'**', component:PageNotFoundComponent, pathMatch:'full'}
];

@NgModule({

  declarations: [ AppComponent,EmployeeComponent, EmployeeListComponent, SalutationPipe, 
    PositionPipe, HttpcomponentComponent, HttpclientcomponentComponent, Vote1Component, 
    Vote2Component, ResComponent, HomeComponent, PageNotFoundComponent, EmpDetailsComponent, 
    Res2Component, ReactivePageComponent, CRUDLSComponent, CustomDirDirective ],
  imports: [BrowserModule,FormsModule,ReactiveFormsModule, HttpClientModule,HttpModule,RouterModule.forRoot(appRoutes)],
  providers: [TestserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
