import {Component, HostBinding, OnInit} from '@angular/core';

@Component({
  selector: 'app-your-sessions',
  templateUrl: './your-sessions.component.html',
  styleUrls: ['./your-sessions.component.scss']
})
export class YourSessionsComponent implements OnInit {
  @HostBinding('class') classes = 'l-menu-section fg1 section-color-glacier';
  constructor() { }

  ngOnInit() {
  }

}
