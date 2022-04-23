import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  IgxButtonGroupModule,
  IgxButtonModule,
  IgxDatePickerModule,
  IgxFocusModule,
  IgxIconModule,
  IgxInputGroupModule,
  IgxRadioModule,
  IgxStepperModule,
  IgxTextSelectionModule,
} from 'igniteui-angular';
import { HammerModule } from '@angular/platform-browser';
@NgModule({
  declarations: [],
  imports: [
  ],
  exports: [
    IgxStepperModule,
    IgxStepperModule,
    IgxButtonModule,
    IgxButtonGroupModule,
    IgxInputGroupModule,
    IgxTextSelectionModule,
    IgxFocusModule,
    IgxIconModule,
    IgxRadioModule,
    IgxDatePickerModule,
    HammerModule
  ],
})
export class ThemeModule {}
