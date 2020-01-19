import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonRippleEffectPageRoutingModule } from './ion-ripple-effect-routing.module';

import { IonRippleEffectPage } from './ion-ripple-effect.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonRippleEffectPageRoutingModule,
    ComponentsModule
  ],
  declarations: [IonRippleEffectPage]
})
export class IonRippleEffectPageModule {}
