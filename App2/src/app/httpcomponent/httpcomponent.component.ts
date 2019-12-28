import { Component,OnInit } from '@angular/core';
import { HttpserviceService } from '../httpservice.service';

@Component({
  selector: 'app-httpcomponent',
  templateUrl: './httpcomponent.component.html',
  styleUrls: ['./httpcomponent.component.css'],
  providers:[HttpserviceService]
})

export class HttpcomponentComponent implements OnInit {

  title:string="Json data";
  birds:[];

  constructor(private j:HttpserviceService) { }

  ngOnInit() 
  {
    this.j.getData().subscribe((e:any)=>{this.birds=e;});
  }

}
