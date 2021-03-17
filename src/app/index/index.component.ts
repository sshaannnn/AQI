import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiData } from './ApiData';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  apiData: ApiData[];
  cities: string[];

  constructor(private http: HttpClient) { }

  async ngOnInit(): Promise<void> {
    this.fetchData();
  }

  /* 取得api資料 **/
  async fetchData(): Promise<void> {
    const url = 'https://data.epa.gov.tw/api/v1/aqx_p_432?api_key=9be7b239-557b-4c10-9775-78cadfc555e9&limit=84&format=json%22';
    const res: any = await this.http.get(url).toPromise();
    this.apiData = res.records.map(x => {
      return {
        AQI: x.AQI, County: x.County, ImportDate: x.ImportDate, Latitude: x.Latitude, Longitude: x.Longitude,
        Pollutant: x.Pollutant, PublishTime: x.PublishTime, SiteName: x.SiteName, Status: x.Status
      };
    });

    const cities = this.apiData.reduce((acc, val) => {
      const county = val.County;
      const groupedRecords = acc[county] || [];
      groupedRecords.push(val);
      acc[county] = groupedRecords;
      return acc;
    }, {});
    this.cities = Object.keys(cities);
    console.log(this.cities);

  }
}
