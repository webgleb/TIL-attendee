import {Injectable} from '@angular/core';
import {HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';

const API_URL = '';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: HttpClient) {
  }

  getData(id: string, params: any) {
    let paramsOpt = new HttpParams();
    Object.keys(params).forEach(function (key) {
      paramsOpt = paramsOpt.append(key, params[key]);
    });
    const options = {
      params: paramsOpt
    };
    return this.http.get(`https://apidev1.theindoorlab.com/eventanalyzer/attendee/v2/snapshot/${id}`, options);
  }
  connectBrokered(eventID, payload) {

    const headers = new HttpHeaders()
      .set('APPLICATIONID', environment.APPLICATIONID)
      .set('AUTHENTICATIONTOKEN', environment.AUTHENTICATIONTOKEN);

    let params = new HttpParams();

    Object.keys(payload).forEach((key) => {
      params = params.append(key, payload[key]);
    });

    const options = {
      params: params,
      headers: headers
    };
    return this.http.get(`https://apidev1.theindoorlab.com/eventanalyzer/brokeredconnection/v2/connect/${eventID}`, options);
  }
  acceptBrokered(eventID, payload) {

    const headers = new HttpHeaders()
      .set('APPLICATIONID', environment.APPLICATIONID)
      .set('AUTHENTICATIONTOKEN', environment.AUTHENTICATIONTOKEN);

    let params = new HttpParams();

    Object.keys(payload).forEach((key) => {
      params = params.append(key, payload[key]);
    });

    const options = {
      params: params,
      headers: headers
    };
    return this.http.get(`https://apidev1.theindoorlab.com/eventanalyzer/brokeredconnection/v2/accept/${eventID}`, options);
  }
}
