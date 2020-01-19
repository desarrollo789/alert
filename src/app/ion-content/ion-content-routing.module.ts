import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonContentPage } from './ion-content.page';

const routes: Routes = [
  {
    path: '',
    component: IonContentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonContentPageRoutingModule {}
