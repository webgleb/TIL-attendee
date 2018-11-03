import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

const API_URL = 'https://apidev1.theindoorlab.com/eventanalyzer/attendee/v2/snapshot/974B7551-EDE7-464C-8537-5DF7456C5884?attendeeid=';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: HttpClient) {
  }

  getData() {
    return this.http.get(API_URL + '2C9BFEEA-18BD-438B-A88E-9722B10C8E6E');
  }
}
