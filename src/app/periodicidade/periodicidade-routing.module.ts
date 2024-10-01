import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PeriodicidadePage } from './periodicidade.page';

const routes: Routes = [
  {
    path: '',
    component: PeriodicidadePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PeriodicidadePageRoutingModule {}
