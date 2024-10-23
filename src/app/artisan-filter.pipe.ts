import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'artisanFilter'
})
export class ArtisanFilterPipe implements PipeTransform {

  transform(items: any[], searchTermBis: string): any[] {
    console.log('terme :', searchTermBis);
    searchTermBis = 'a';

    /* let artisanString = artisan.name + artisan.specialty + artisan.location;*/
    

    return items.filter(artisan =>artisan.category.toLowerCase().includes(searchTermBis.toLowerCase()));

    };
  }

