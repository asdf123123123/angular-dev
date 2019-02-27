import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegionComponent } from './region/region.component';

const routes: Routes = [{ path: 'region', component: RegionComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
