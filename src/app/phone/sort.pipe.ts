import { Pipe, PipeTransform } from '@angular/core';
import { Contacts, objFields } from './phone.component';

@Pipe({
  name: 'sort',
  pure: false
})
export class SortPipe implements PipeTransform {

  transform(value: Contacts[], name: objFields |undefined, type:string): Contacts []{
    if(!value) return [];
    if(!name) return value;
    if(!type) return value;
    if(name === 'first'||name==='second'||name==='number'){
    if(type ==='asc'){
      return value.sort((a,b) => (a[name] > b[name]) ? 1 : ((a[name] < b[name]) ? -1 : 0))
    }
    return value.sort((a,b) => (a[name] < b[name]) ? 1 : ((a[name] > b[name]) ? -1 : 0))
     }
    else{
    return value;
   }
 
}
}
