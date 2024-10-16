import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroEquipamentosPageRoutingModule } from './cadastro-equipamentos-routing.module';

import { CadastroEquipamentosPage } from './cadastro-equipamentos.page';
import { MenuPageModule } from '../menu/menu.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroEquipamentosPageRoutingModule,
    MenuPageModule
  ],
  declarations: [CadastroEquipamentosPage]
})
export class CadastroEquipamentosPageModule {}
