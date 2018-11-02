import {AfterViewInit, Component, OnInit} from '@angular/core';
import {scrollInitJslogic} from '../../scripts/js-scroll-init';
import {scrollResponsiveJslogic} from '../../scripts/js-scroll-responsive';
import {chartItem} from '../../scripts/scripts';

@Component({
  selector: 'app-attendee',
  templateUrl: './attendee.component.html',
  styleUrls: ['./attendee.component.scss']
})
export class AttendeeComponent implements OnInit, AfterViewInit {

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    setTimeout(() => {
      scrollInitJslogic();
      scrollResponsiveJslogic();
      chartItem();
    }, 0);
  }


}
