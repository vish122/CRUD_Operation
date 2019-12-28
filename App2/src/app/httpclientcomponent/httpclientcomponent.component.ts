import { Component, OnInit } from '@angular/core';
import { HttpclientserviceService } from '../httpclientservice.service';
import { Ifakedata } from '../Ifakefata';
import { Ibirds } from '../Ibirds';

@Component({
  selector: 'app-httpclientcomponent',
  templateUrl: './httpclientcomponent.component.html',
  styleUrls: ['./httpclientcomponent.component.css'],
  providers:[HttpclientserviceService]
})
export class HttpclientcomponentComponent implements OnInit {

  birds1:Ibirds[];
  errorMsg:string='';
  constructor(private h2:HttpclientserviceService) { }

  ngOnInit() {
    this.h2.getDataClient().subscribe((e:Ibirds[])=>{this.birds1=e}, (error:string)=>{this.errorMsg=error});
  }

}
