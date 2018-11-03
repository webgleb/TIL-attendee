import {Component, HostBinding, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-your-fitness',
  templateUrl: './your-fitness.component.html',
  styleUrls: ['./your-fitness.component.scss']
})
export class YourFitnessComponent implements OnInit {
  @HostBinding('class') classes = 'l-menu-section fg1 section-color-glacier l-menu-section_bt';
  @Input() fitness: any;
  constructor() { }

  ngOnInit() {
    console.log(this.fitness)
  }

}
