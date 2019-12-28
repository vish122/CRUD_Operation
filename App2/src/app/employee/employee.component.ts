import { Component } from '@angular/core';
import { IEmployee } from '../Iemployee';
import { TestserviceService } from '../testservice.service';



@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  
})
export class EmployeeComponent 
{
employee:IEmployee[];

constructor(e:TestserviceService)
{
  this.employee=e.empinfo();
}


allEmp():number
{
  return this.employee.length;
}

maleEmp():number
{
  return this.employee.filter(e=> e.gender==="male").length;
}

femaleEmp():number
{
  return this.employee.filter(e=> e.gender==="female").length;
}

selected:string='All';

PRbChange(a):void
{
  this.selected=a;
}




}
