import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category2'
})
export class Category2Pipe implements PipeTransform {

  transform(datas: any [], sortOrderServices: string): any [] {
    return datas.filter((data)=> data.category==="Services" )
  }

}
