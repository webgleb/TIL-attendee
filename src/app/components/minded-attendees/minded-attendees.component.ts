import {Component, HostBinding, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-minded-attendees',
  templateUrl: './minded-attendees.component.html',
  styleUrls: ['./minded-attendees.component.scss']
})
export class MindedAttendeesComponent implements OnInit {
  @HostBinding('class') classes = 'l-menu-section fg1 section-color-glacier l-menu-section_bt';
  @Input() likeminded: any;
  constructor() { }

  ngOnInit() {
  }

}
