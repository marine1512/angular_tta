import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category3'
})
export class Category3Pipe implements PipeTransform {

  transform(datas: any [], sortOrderFabrication: string): any [] {
    return datas.filter((data)=> data.category==="Fabrication" )
  }

}
