import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilExemploPage } from './perfil-exemplo.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilExemploPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilExemploPageRoutingModule {}
