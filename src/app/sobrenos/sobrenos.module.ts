import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SobrenosPageRoutingModule } from './sobrenos-routing.module';

import { SobrenosPage } from './sobrenos.page';
import { MenuPageModule } from '../menu/menu.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SobrenosPageRoutingModule,
    MenuPageModule
  ],
  declarations: [SobrenosPage]
})
export class SobrenosPageModule {}
