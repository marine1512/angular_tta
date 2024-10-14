import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'top'
})
export class TopPipe implements PipeTransform {

  transform(datas: any [], sortOrder: string): any [] {
    //if(sortOrder === 'asc') {
      //return datas.sort((a,b)=> { return b.top - a.top})
    //} else {
      //return datas.sort((a,b)=> { return b.top - a.top})
    //}
    return datas.filter((data)=> data.top===true)
  }

}
