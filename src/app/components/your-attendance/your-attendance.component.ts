import {AfterViewInit, Component, HostBinding, Input, OnInit} from '@angular/core';
import * as Moment from 'moment';

@Component({
  selector: 'app-your-attendance',
  templateUrl: './your-attendance.component.html',
  styleUrls: ['./your-attendance.component.scss']
})
export class YourAttendanceComponent implements OnInit {

  @HostBinding('class') classes = 'l-menu-section fg1 section-color-glacier l-menu-section_bt';
  @Input() attendance: any;

  constructor() {
  }

  ngOnInit() {
  }

  getTimeArray(date) {
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
