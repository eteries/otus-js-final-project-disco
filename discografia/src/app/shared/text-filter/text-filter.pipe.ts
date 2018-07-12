import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textFilter'
})
export class TextFilterPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
      if(!items) return [];
      if(!searchText) return items;

      searchText = searchText.toLowerCase();

      return items.filter( item => {
          return (item.title + item.album + item.artist).toLowerCase().includes(searchText);
      });
  }

}
