import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroComodoPage } from './cadastro-comodo.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroComodoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroComodoPageRoutingModule {}
