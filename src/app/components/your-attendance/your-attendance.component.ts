import {Component, HostBinding, OnInit} from '@angular/core';

@Component({
  selector: 'app-your-attendance',
  templateUrl: './your-attendance.component.html',
  styleUrls: ['./your-attendance.component.scss']
})
export class YourAttendanceComponent implements OnInit {

  @HostBinding('class') classes = 'l-menu-section fg1 section-color-glacier l-menu-section_bt';

  constructor() {
  }

  ngOnInit() {
  }

}
