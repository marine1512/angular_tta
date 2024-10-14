import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(produits: any[], searchTerm: string): any[] {
    console.log(searchTerm);
    if (!searchTerm) {
      return produits;
    }
    let response = produits.filter(produit => produit.titre.toLowerCase().includes(searchTerm.toLowerCase()));

    console.log(response);
    return response;
  }


}
