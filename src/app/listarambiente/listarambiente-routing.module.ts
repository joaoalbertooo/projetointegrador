import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarambientePage } from './listarambiente.page';

const routes: Routes = [
  {
    path: '',
    component: ListarambientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListarambientePageRoutingModule {}
