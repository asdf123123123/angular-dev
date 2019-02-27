import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Region } from './models/region.model';

const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class RegionService {

  constructor( private http:HttpClient )  {}

  private regionUrl = '/region';

  public getRegions(findregion) {
    return this.http.post<Region>(this.regionUrl, findregion);
  }

}
