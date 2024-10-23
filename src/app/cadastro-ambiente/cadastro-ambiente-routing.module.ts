import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroAmbientePage } from './cadastro-ambiente.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroAmbientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroAmbientePageRoutingModule {}
