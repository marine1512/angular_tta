import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category4'
})
export class Category4Pipe implements PipeTransform {

  transform(datas: any [], sortOrderAlimentation: string): any [] {
    return datas.filter((data)=> data.category==="Alimentation" )
  }

}
