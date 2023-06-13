import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartComponent } from './drag-page/chart/chart.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./drag/drag.module').then((m) => m.DragModule),
  },
  {
    path: 'chart',
    component: ChartComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
