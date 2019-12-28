import { Component } from '@angular/core';
import { TestserviceService } from '../testservice.service';
import { IEmployee } from '../Iemployee';


@Component({
  selector: 'app-vote1',
  templateUrl: './vote1.component.html',
  styleUrls: ['./vote1.component.css'],
  providers:[TestserviceService]
})
export class Vote1Component {

  emp:IEmployee[];
  constructor(private h1:TestserviceService) { 
    this.emp=h1.empinfo();
  }

  votA:number=0;
  votB:number=0;

  Isdisabled:boolean=false;

  voteA():void
  {
    this.votA++;
    this.Isdisabled=true;
  }
  voteB():void
  {
    this.votB++;
    this.Isdisabled=true;
  }

}
