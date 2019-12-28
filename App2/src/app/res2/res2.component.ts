import { Component, OnInit } from '@angular/core';
import { HttpclientserviceService } from '../httpclientservice.service';
import {ActivatedRoute,Router} from '@angular/router';


@Component({
  selector: 'app-res2',
  templateUrl: './res2.component.html',
  styleUrls: ['./res2.component.css'],
  providers:[HttpclientserviceService]
})
export class Res2Component implements OnInit {
rs:any[]=[];
newres:any;

  constructor(private _HttpClient:HttpclientserviceService, private _ActivatedRouter:ActivatedRoute, private _Router:Router) { }

  ngOnInit() {

    let eid: number = this._ActivatedRouter.snapshot.params['id'];

    this._HttpClient.getDataClient().subscribe((e:any)=>{
      this.rs=e.data;
  
    for(let i=0; i<this.rs.length; i++)
    {
      if(eid==this.rs[i].id)
      {
        this.newres=this.rs[i];
      }
    }
  
});

}
  
backbutton()
  {
    this._Router.navigate(['/res']);
  }

}
