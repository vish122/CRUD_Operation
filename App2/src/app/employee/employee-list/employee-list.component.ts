import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})

export class EmployeeListComponent 
{
  @Input()
  all;

  @Input()
  male;

  @Input()
  female;

  RbValue : string = 'All';

  @Output()
  Rb : EventEmitter<string> = new EventEmitter<string>();

  RbChange()
  {
    this.Rb.emit(this.RbValue);
  }

  
}
