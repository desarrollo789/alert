import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonContentPageRoutingModule } from './ion-content-routing.module';

import { IonContentPage } from './ion-content.page';

import { ComponentsModule } from '../components/components.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonContentPageRoutingModule,
    ComponentsModule
  ],
  declarations: [IonContentPage]
})
export class IonContentPageModule {}
