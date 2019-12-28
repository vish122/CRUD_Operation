import { Injectable } from '@angular/core';
import { IEmployee } from './Iemployee';

@Injectable()

export class TestserviceService {
  getEmployeeByCode: any;
 
  empinfo():IEmployee[] 
  {
    return [{code:101, name:'alice', gender:'female', salary:6500,pos:'', deg:'Software Developer', exp:3, dob:'6/25/1995'},
    {code:102, name:'priya', gender:'female', salary:5300.9875, pos:'', deg:'Software Developer', exp:2, dob:'12/22/1998'},
    {code:103, name:'kamlesh', gender:'male', salary:4500.000, pos:'', deg:'Software Developer', exp:4, dob:'3/30/1996'},
    {code:104, name:'ravi', gender:'male', salary:4560.432, pos:'', deg:'Software Developer', exp:1, dob:'8/21/1993'},
    {code:105, name:'shruti', gender:'female', salary:7600.00, pos:'', deg:'Software Developer', exp:6, dob:'11/18/1992'},
    {code:106, name:'Santosh', gender:'male', salary:7000, pos:'', deg:'Software Developer', exp:3, dob:'10/9/1997'},
    {code:107, name:'Kimee', gender:'female', salary:8000, pos:'', deg:'Software Developer', exp:2, dob:'4/12/1996'}
   ]
  }


}
