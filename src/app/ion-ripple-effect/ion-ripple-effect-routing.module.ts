import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonRippleEffectPage } from './ion-ripple-effect.page';

const routes: Routes = [
  {
    path: '',
    component: IonRippleEffectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonRippleEffectPageRoutingModule {}
