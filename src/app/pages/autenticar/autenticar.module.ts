import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AutenticarPageRoutingModule } from './autenticar-routing.module';

import { AutenticarPage } from './autenticar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AutenticarPageRoutingModule
  ],
  declarations: [AutenticarPage]
})
export class AutenticarPageModule {}
