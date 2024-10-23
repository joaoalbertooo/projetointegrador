import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarequipamentoPageRoutingModule } from './listarequipamento-routing.module';

import { ListarequipamentoPage } from './listarequipamento.page';
import { MenuPageModule } from '../menu/menu.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarequipamentoPageRoutingModule,
    MenuPageModule
  ],
  declarations: [ListarequipamentoPage]
})
export class ListarequipamentoPageModule {}
