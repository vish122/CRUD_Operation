import { Injectable } from '@angular/core';
import {HttpClient,HttpErrorResponse} from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { Ibirds } from './Ibirds';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';



@Injectable()

export class HttpclientserviceService {

  constructor(private h2:HttpClient) { }

  getDataClient()
  {
    return this.h2.get('https://reqres.in/api/users?page=2').catch(this.handleError);
   
  }

  handleError(error:HttpErrorResponse){
   return Observable.throw( "Server Error..") ;
  }

}
