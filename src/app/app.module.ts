import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegionComponent } from './region/region.component';
import { RegionService } from './region.service';
import { ErrorDialogComponent } from './error-dialog/error-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    RegionComponent,
    ErrorDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [RegionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
