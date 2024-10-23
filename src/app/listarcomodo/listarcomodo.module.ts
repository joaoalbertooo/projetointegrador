import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarcomodoPageRoutingModule } from './listarcomodo-routing.module';

import { ListarcomodoPage } from './listarcomodo.page';
import { MenuPageModule } from '../menu/menu.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarcomodoPageRoutingModule,
    MenuPageModule
  ],
  declarations: [ListarcomodoPage]
})
export class ListarcomodoPageModule {}
