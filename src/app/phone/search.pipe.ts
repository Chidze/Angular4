import { Pipe, PipeTransform } from '@angular/core';
import { Contacts } from './phone.component';

@Pipe({
  name: 'search',
  pure: false
})
export class SearchPipe implements PipeTransform {

  transform(value: Contacts[], find: string): Contacts[] {
    if(!value) return [];
    if(!find) return value;
   
    return value.filter(contact=> 
      contact.first.toLowerCase().includes(find.toLowerCase())||
      contact.second.toLowerCase().includes(find.toLowerCase())||
      contact.number.toString().includes(find))
  }

}
