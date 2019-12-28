import { Component, OnInit } from '@angular/core';
import { HttpclientserviceService } from '../httpclientservice.service';

@Component({
  selector: 'app-res',
  templateUrl: './res.component.html',
  styleUrls: ['./res.component.css'],
  providers:[HttpclientserviceService]
})
export class ResComponent implements OnInit {

  res: any = [];
  errorMsg:string='';
  n=2;

  constructor(private h1:HttpclientserviceService) { }

  ngOnInit() {
    this.h1.getDataClient().subscribe(e=>{this.res=e}, (err:string)=>{this.errorMsg=err});
   
  }

}
