import {Component, HostBinding, OnInit} from '@angular/core';

@Component({
  selector: 'app-brokered',
  templateUrl: './brokered.component.html',
  styleUrls: ['./brokered.component.scss']
})
export class BrokeredComponent implements OnInit {
  @HostBinding('class') classes = 'l-menu-section fg1 section-color-glacier';
  constructor() { }

  ngOnInit() {
  }

}
