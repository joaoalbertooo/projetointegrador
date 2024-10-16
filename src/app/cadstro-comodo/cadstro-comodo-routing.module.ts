import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadstroComodoPage } from './cadstro-comodo.page';

const routes: Routes = [
  {
    path: '',
    component: CadstroComodoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadstroComodoPageRoutingModule {}
