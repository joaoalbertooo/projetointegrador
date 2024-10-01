import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardExemploPageRoutingModule } from './card-exemplo-routing.module';

import { CardExemploPage } from './card-exemplo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardExemploPageRoutingModule
  ],
  declarations: [CardExemploPage]
})
export class CardExemploPageModule {}
