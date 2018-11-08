import {Component, HostBinding, Input, OnInit} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'app-brokered',
  templateUrl: './brokered.component.html',
  styleUrls: ['./brokered.component.scss']
})
export class BrokeredComponent implements OnInit {
  @HostBinding('class') classes = 'l-menu-section fg1 section-color-glacier';
  @Input() brokered_connections: any;
  isChecked = false;
  selectedIndex: number;

  constructor(
    private route: ActivatedRoute,
    private api: ApiService,
    public ngxSmartModalService: NgxSmartModalService
  ) { }

  ngOnInit() {
    console.log();
  }

  tryAccept() {
    const eventId: string = this.route.snapshot.paramMap.get('id');
    this.route.queryParams.subscribe((params: Params) => {
      const payload: any = {};
      payload.attendeeid = params.attendeeid;
      payload.companyid = this.brokered_connections.metrics[0].values[this.selectedIndex].key;
      this.api.acceptBrokered(eventId, payload).subscribe((res: any) => {
        this.brokered_connections.metrics[0].values[this.selectedIndex] = {
          ...this.brokered_connections.metrics[0].values[this.selectedIndex],
          dwell: res.resultGroups[0].metrics[0].dwell,
          state: res.resultGroups[0].metrics[0].state,
          visits: res.resultGroups[0].metrics[0].visits,
          email: res.resultGroups[0].metrics[0].email
        };
        // this.brokered_connections.metrics[0].values[index] = {...res.resultGroups[0].metrics[0]};
      });
    });
  }

  acceptUser(index: number) {
    this.selectedIndex = index;
    if (!localStorage.getItem('showModal')) {
      this.ngxSmartModalService.getModal('myModal').open();
    } else {
      this.tryAccept();
    }
  }

  onSubmitModal(state) {
    if (state) {
      localStorage.setItem('showModal',  'true');
    }
    this.isChecked = false;
    this.ngxSmartModalService.getModal('myModal').close();
    this.tryAccept();
  }
}
