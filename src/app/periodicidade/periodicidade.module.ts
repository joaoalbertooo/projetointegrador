import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PeriodicidadePageRoutingModule } from './periodicidade-routing.module';

import { PeriodicidadePage } from './periodicidade.page';
import { MenuPageModule } from '../menu/menu.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PeriodicidadePageRoutingModule,
    MenuPageModule
  ],
  declarations: [PeriodicidadePage]
})
export class PeriodicidadePageModule {}
