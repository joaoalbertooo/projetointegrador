import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilExemploPageRoutingModule } from './perfil-exemplo-routing.module';

import { PerfilExemploPage } from './perfil-exemplo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilExemploPageRoutingModule
  ],
  declarations: [PerfilExemploPage]
})
export class PerfilExemploPageModule {}
