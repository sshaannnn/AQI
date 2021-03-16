import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { promise } from 'protractor';
import { groupBy } from 'rxjs/internal/operators/groupBy';

interface ApiData {
  AQI: string;
  County: string;
  ImportDate: string;
  Latitude: string;
  Longitude: string;
  Pollutant: string;
  PublishTime: string;
  SiteName: string;
  Status: string;
}

@Component({
  selector: 'app-aqi',
  templateUrl: './aqi.component.html',
  styleUrls: ['./aqi.component.scss']
})

export class AqiComponent implements OnInit {

  apiData: ApiData;

  constructor(private http: HttpClient) { }

  async ngOnInit(): Promise<void> {
    this.fetchData();
  }

  async fetchData(): Promise<void> {
    const url = 'https://data.epa.gov.tw/api/v1/aqx_p_432?api_key=9be7b239-557b-4c10-9775-78cadfc555e9&limit=84&format=json%22';
    await this.http.get<any>(url).subscribe(res => {
      this.apiData = res.records.map(x => {
        return {
          AQI: x.AQI, County: x.County, ImportDate: x.ImportDate, Latitude: x.Latitude, Longitude: x.Longitude,
          Pollutant: x.Pollutant, PublishTime: x.PublishTime, SiteName: x.SiteName, Status: x.Status
        };
      });
      const lGroup = groupBy(this.apiData, x => x.County);

    });
  }
  // const lGroup = groupBy(this.apiData, x => x.County);
}
