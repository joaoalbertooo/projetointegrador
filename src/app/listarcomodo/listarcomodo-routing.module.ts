import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarcomodoPage } from './listarcomodo.page';

const routes: Routes = [
  {
    path: '',
    component: ListarcomodoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListarcomodoPageRoutingModule {}
