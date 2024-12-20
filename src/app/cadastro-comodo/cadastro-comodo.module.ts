import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroComodoPageRoutingModule } from './cadastro-comodo-routing.module';

import { CadastroComodoPage } from './cadastro-comodo.page';
import { MenuPageModule } from '../menu/menu.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroComodoPageRoutingModule,
    MenuPageModule
  ],
  declarations: [CadastroComodoPage]
})
export class CadastroComodoPageModule {}
