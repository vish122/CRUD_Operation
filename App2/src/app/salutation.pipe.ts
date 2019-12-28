import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'salutation'
})
export class SalutationPipe implements PipeTransform {

  transform(name, gender) 
  {
    if(gender.toLowerCase() == 'male')
    {
    return "Mr."+name;
    }
    else
    {
    return "Miss."+name;
    }
  }
}
