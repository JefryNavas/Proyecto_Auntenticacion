import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  IgxButtonGroupModule,
  IgxButtonModule,
  IgxDatePickerModule,
  IgxFocusModule,
  IgxIconModule,
  IgxInputGroupModule,
  IgxSelectModule,
  IgxRadioModule,
  IgxStepperModule,
  IgxTextSelectionModule,
  IgxDialogModule,
  IgxCardModule
} from 'igniteui-angular';
import { HammerModule } from '@angular/platform-browser';
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    IgxStepperModule,
    IgxStepperModule,
    IgxButtonModule,
    IgxButtonGroupModule,
    IgxSelectModule,
    IgxInputGroupModule,
    IgxTextSelectionModule,
    IgxFocusModule,
    IgxIconModule,
    IgxRadioModule,
    IgxDatePickerModule,
    HammerModule,
    IgxDialogModule,
    IgxCardModule
  ],
})
export class ThemeModule {}
