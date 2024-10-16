import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadstroComodoPageRoutingModule } from './cadstro-comodo-routing.module';

import { CadstroComodoPage } from './cadstro-comodo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadstroComodoPageRoutingModule
  ],
  declarations: [CadstroComodoPage]
})
export class CadstroComodoPageModule {}
