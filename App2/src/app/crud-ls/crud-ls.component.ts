import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud-ls',
    templateUrl: './crud-ls.component.html',
     styleUrls: ['./crud-ls.component.css']
})
export class CRUDLSComponent implements OnInit  {
  ngOnInit(): void {
    throw new Error("Method not implem.");
  }
  title = ' Angular  CURD operation with an Array using LocalStorage';
 employees:any[]=[];
 /* employees=[
     {name:"balaji",position:"manager"}  ,
    {name:"Jay",position:"programmer"}  ,
    {name:"Ram",position:"tester"}   
    
]; */ 

model:any={};
emp:any[]=JSON.parse(localStorage.getItem("Info"));;
  addEmployee(){
   console.log(this.model);
    this.employees.push(this.model);
    localStorage.setItem("Info",JSON.stringify(this.employees));
    this.emp=JSON.parse(localStorage.getItem("Info"));
   this.model={};
  }
  deleteEmployee(i){
    this.employees.splice(i,1);
    localStorage.setItem("Info",JSON.stringify(this.employees));
   this.emp=JSON.parse(localStorage.getItem("Info"));
      console.log(i);

  }
myvalue;
model2:any={}
  editEmployee(i){
    console.log(i);
    this.model2.name=this.employees[i].name;
    this.model2.position=this.employees[i].position;
    this.myvalue=i;
  }

   updateEmployee(){

    this.employees[this.myvalue]=this.model2;
       localStorage.setItem("Info",JSON.stringify(this.employees));
       this.emp=JSON.parse(localStorage.getItem("Info"));
       this.model2={};
   /*  console.log("hello");
    let k=this.myvalue;
   
     for(let i=0;i<this.employees.length;i++)
    {
      console.log(i);
     if(i==k)
     {
       this.employees[i]=this.model2;
       localStorage.setItem("Info",JSON.stringify(this.employees));
       this.emp=JSON.parse(localStorage.getItem("Info"));
       this.model2={};
     }
    } */ 

   
  }
}

