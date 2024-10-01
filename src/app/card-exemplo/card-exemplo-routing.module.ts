import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardExemploPage } from './card-exemplo.page';

const routes: Routes = [
  {
    path: '',
    component: CardExemploPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardExemploPageRoutingModule {}