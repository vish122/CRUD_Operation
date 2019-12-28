import { Injectable } from '@angular/core';
import {Http} from '@angular/Http';
import {map} from 'rxjs/operators';
import { from } from 'rxjs';

@Injectable()

export class HttpserviceService {

  constructor(private h1:Http) { }

  getData()
  {
    return this.h1.get('../assets/birds.json').pipe(map(e=>e.json()));
  }
 
}
