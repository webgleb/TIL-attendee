import {Component, HostBinding, OnInit} from '@angular/core';

@Component({
  selector: 'app-exhibitors',
  templateUrl: './exhibitors.component.html',
  styleUrls: ['./exhibitors.component.scss']
})
export class ExhibitorsComponent implements OnInit {
  @HostBinding('class') classes = 'l-menu-section fg1 section-color-glacier l-menu-section_bt';
  constructor() { }

  ngOnInit() {
  }

}
