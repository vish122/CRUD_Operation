import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router'
import { TestserviceService } from 'src/app/testservice.service';
import { IEmployee } from 'src/app/Iemployee';


@Component({
    selector: 'app-emp-details',
  templateUrl: './emp-details.component.html',
  styleUrls: ['./emp-details.component.css'],
  providers: [TestserviceService]
})
export class EmpDetailsComponent implements OnInit {
  employees: any[];
  employees1: IEmployee;
  emp: any;
  empid1;
  
  constructor(private _employeeService: TestserviceService, private _activatedRoute: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    
    this.employees = this._employeeService.empinfo();

    //  let empcode = this._activatedRoute.snapshot.params['code'];

     this._activatedRoute.paramMap.subscribe((_p:ParamMap)=>{
             let empcode = parseInt( _p.get('code') )
             this.empid1=empcode;
                  

    
       for(let i=0;i<this.employees.length;i++){
        if(empcode == this.employees[i].code)
        {
          this.emp = this.employees[i];
        }
      }
    })
  
  }

  onBackButtonClick(): void {
    this._router.navigate(['/emp']);
  }

  nextemp(): void{
    console.log(this.empid1);
    let nextemp= this.empid1+1;
    this._router.navigate(['/emp',nextemp]);
  } 
  
  previousemp(): void{
    console.log(this.empid1);
    let previousemp= this.empid1-1;
    this._router.navigate(['/emp',previousemp]);
}
}
