import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroEquipamentosPageRoutingModule } from './cadastro-equipamentos-routing.module';

import { CadastroEquipamentosPage } from './cadastro-equipamentos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroEquipamentosPageRoutingModule
  ],
  declarations: [CadastroEquipamentosPage]
})
export class CadastroEquipamentosPageModule {}
