import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroAmbientePageRoutingModule } from './cadastro-ambiente-routing.module';

import { CadastroAmbientePage } from './cadastro-ambiente.page';
import { MenuPageModule } from '../menu/menu.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroAmbientePageRoutingModule,
    MenuPageModule
  ],
  declarations: [CadastroAmbientePage]
})
export class CadastroAmbientePageModule {}
