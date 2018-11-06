import { PipeTransform, Pipe } from '@angular/core';

import * as Moment from 'moment';

@Pipe({name: 'prettyTime'})
export class PrettyTime implements PipeTransform {
  transform(date: number, args: any): string | number{
    if (date > 0) {
      const time: any = Moment.utc(date * 1000);
      const hours = time.hour();
      const minutes = time.minutes();
      let html = '';
      html += hours ? `${hours}<i>h</i>` : '';
      html += minutes ? `${hours ? ' ' : ''}${minutes < 10 ? '0' + minutes : minutes}<i>m</i>` : '';
      return html;
    }
    return date;
  }
}
