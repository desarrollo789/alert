import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IoniAntionSheetPageRoutingModule } from './ioni-antion-sheet-routing.module';

import { IoniAntionSheetPage } from './ioni-antion-sheet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IoniAntionSheetPageRoutingModule
  ],
  declarations: [IoniAntionSheetPage]
})
export class IoniAntionSheetPageModule {}
