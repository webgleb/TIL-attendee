import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

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
}
