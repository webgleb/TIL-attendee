import {Component, OnInit} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
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

  constructor(
    private route: ActivatedRoute,
    private api: ApiService
  ) {}
  ngOnInit() {
    const id: string = this.route.snapshot.paramMap.get('id');
    this.route.queryParams.subscribe((params: Params) => {
      this.api.getData(id, params).subscribe((res: any) => {
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
    });

  }

}
