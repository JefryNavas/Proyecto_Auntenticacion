import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrarPage } from './registrar.page';
import { RegistrarPageRoutingModule } from './registrar-routing.module';
import { MaterialModule } from '../../material/material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RegistrarPageRoutingModule,
    MaterialModule
  ],
  declarations: [RegistrarPage]
})
export class RegistrarPageModule { }
