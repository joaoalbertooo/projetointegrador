import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarequipamentoPage } from './listarequipamento.page';

const routes: Routes = [
  {
    path: '',
    component: ListarequipamentoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListarequipamentoPageRoutingModule {}
