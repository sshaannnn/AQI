import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AqiComponent } from './aqi/aqi.component';

const routes: Routes = [
  {
    path: 'AQI',
    component: AqiComponent
  },
  {
    path: '',
    redirectTo: '/AQI',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
