import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AqiRoutingModule } from './aqi-routing.module';
import { AqiComponent } from './aqi/aqi.component';
@NgModule({
  declarations: [AqiComponent],
  imports: [
    CommonModule,
    AqiRoutingModule
  ]
})
export class AqiModule { }
