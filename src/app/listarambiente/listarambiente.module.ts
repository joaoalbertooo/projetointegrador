import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarambientePageRoutingModule } from './listarambiente-routing.module';

import { ListarambientePage } from './listarambiente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarambientePageRoutingModule
  ],
  declarations: [ListarambientePage]
})
export class ListarambientePageModule {}
