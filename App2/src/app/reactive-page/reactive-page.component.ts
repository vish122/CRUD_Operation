import { Component } from '@angular/core';
import { Validators, FormGroup,FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-page',
  templateUrl: './reactive-page.component.html',
   styleUrls: ['./reactive-page.component.css']
})
export class ReactivePageComponent {
  username= new FormControl('', [Validators.required,Validators.minLength(5),Validators.maxLength(10)]);
  password= new FormControl('', [Validators.required,Validators.minLength(8)]);

  loginForm :FormGroup = this.builder.group({
    username:this.username,
    password:this.password
  });

  constructor(private builder:FormBuilder) {}
    
  login() {
    console.log(this.loginForm.value);
    alert("Welcome"+"  "+ this.loginForm.value.username);
    
  }
}
