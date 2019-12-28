import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'position'
})
export class PositionPipe implements PipeTransform {

  transform(degignation,experience): string 
  {
    if(experience>=3)
    {
      return 'Senior '+degignation;
    }
    else
    {
      return 'Junior '+degignation;
    }
  }

}
