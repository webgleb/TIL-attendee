import {Component, HostBinding, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-brokered',
  templateUrl: './brokered.component.html',
  styleUrls: ['./brokered.component.scss']
})
export class BrokeredComponent implements OnInit {
  @HostBinding('class') classes = 'l-menu-section fg1 section-color-glacier';
  @Input() brokered_connections: any;

  constructor() {
  }

  ngOnInit() {
  }

}
