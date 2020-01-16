import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IoniAntionSheetPage } from './ioni-antion-sheet.page';

const routes: Routes = [
  {
    path: '',
    component: IoniAntionSheetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IoniAntionSheetPageRoutingModule {}
