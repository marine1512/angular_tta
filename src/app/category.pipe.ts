import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(datas: any [], sortOrderBatiment: string): any [] {
    return datas.filter((data)=> data.category==="Bâtiment" )
  }

}
