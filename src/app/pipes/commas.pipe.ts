import { PipeTransform, Pipe } from '@angular/core';

@Pipe({name: 'commas'})
export class CommasPipe implements PipeTransform {
  transform(nStr: string, args: string[]): string {
    nStr += '';
    const x = nStr.split('.');
    let x1 = x[0];
    const x2 = x.length > 1 ? '.' + x[1] : '';
    const rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
      x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
  }
}
