import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PeriodicidadePageRoutingModule } from './periodicidade-routing.module';

import { PeriodicidadePage } from './periodicidade.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PeriodicidadePageRoutingModule
  ],
  declarations: [PeriodicidadePage]
})
export class PeriodicidadePageModule {}
