import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroEquipamentosPage } from './cadastro-equipamentos.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroEquipamentosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroEquipamentosPageRoutingModule {}
