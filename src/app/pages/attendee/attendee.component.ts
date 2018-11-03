import {Component, OnInit} from '@angular/core';
import {scrollInitJslogic} from '../../scripts/js-scroll-init';
import {scrollResponsiveJslogic} from '../../scripts/js-scroll-responsive';
import {chartItem} from '../../scripts/scripts';
import {ApiService} from '../../services/api.service';


@Component({
  selector: 'app-attendee',
  templateUrl: './attendee.component.html',
  styleUrls: ['./attendee.component.scss']
})
export class AttendeeComponent implements OnInit{
  data: any = {};
  constructor(private api: ApiService) {
  }

  ngOnInit() {
    this.api.getData().subscribe((res: any) => {
      res.resultGroups.forEach((item) => {
        this.data[item.key] = item;
      });
      console.log(this.data);
      setTimeout(() => {
        scrollInitJslogic();
        scrollResponsiveJslogic();
        chartItem();
      }, 0);
    });

  }

}
