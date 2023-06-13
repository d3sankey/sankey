import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DragPageComponent } from './drag-page/drag-page.component';
const routes: Routes = [
  {
    path: '',
    component: DragPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DragRoutingModule { }
