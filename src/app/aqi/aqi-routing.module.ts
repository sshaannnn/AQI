import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AqiComponent } from './aqi/aqi.component';


const routes: Routes = [{ path: '', component: AqiComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AqiRoutingModule { }
