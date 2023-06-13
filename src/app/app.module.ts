import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { ChartComponent } from './drag-page/chart/chart.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { DatavizSankeyComponent } from './drag-page/chart/sankey.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ChartComponent,DatavizSankeyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxDropzoneModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
