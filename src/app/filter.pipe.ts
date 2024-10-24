import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], searchTerm: string): any[] {
    console.log(searchTerm);
    if (!searchTerm) {
      return items;
    }
    return items.filter(item=>{
      let itemString = item.name.toLowerCase() + item.specialty.toLowerCase() + item.location.toLowerCase();
      return itemString.includes(searchTerm.toLowerCase()); 
    })
  }
}