import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberPrefix'
})
export class NumberPrefixPipe implements PipeTransform {

  transform(value: string, country?: string): string {
    let prefix: string = "";
    switch (country) {
      case 'SPAIN':
        prefix = '+34';
        break;
      case 'FRANCE':
        prefix = '+33';
        break;
    }
    return prefix + value;
  }

}
