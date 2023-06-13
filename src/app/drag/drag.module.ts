import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DragRoutingModule } from './drag-routing.module';
import { NgxDropzoneModule } from 'ngx-dropzone';



@NgModule({
  declarations: [
   
  ],
  imports: [
    CommonModule,
    DragRoutingModule,
    NgxDropzoneModule,
  ]
})
export class DragModule { }
