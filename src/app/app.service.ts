import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SpaceXData } from './app.model';

@Injectable({
  providedIn: "root",
})
export class AppService {
  constructor(private httpClient: HttpClient) {}

  getData(): Observable<SpaceXData[]> {
    return this.httpClient.get<SpaceXData[]>(
      "https://api.spaceXdata.com/v3/launches?limit=100"
    );
  }

  filterDataByLaunchStatus(launchValue): Observable<SpaceXData[]> {
    return this.httpClient.get<SpaceXData[]>(`
    https://api.spaceXdata.com/v3/launches?limit=100&launch_success=${launchValue}`);
  }
  
  filterDataByLandStatus(
    launchValue,
    landValue
  ): Observable<SpaceXData[]> {
    return this.httpClient.get<SpaceXData[]>(`
    https://api.spaceXdata.com/v3/launches?limit=100&launch_success=${launchValue}&land_success=${landValue}`);
  }

  filterDataByYear(
    launchValue,
    landValue,
    landingYearValue
  ): Observable<SpaceXData[]> {
    return this.httpClient.get<SpaceXData[]>(`
    https://api.spaceXdata.com/v3/launches?limit=100&launch_success=${launchValue}&land_success=${landValue}&launch_year=${landingYearValue}`);
  }
}
