import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'alerta',
    loadChildren: () => import('./alerta/alerta.module').then( m => m.AlertaPageModule)
  },
  {
    path: 'ioni-antion-sheet',
    loadChildren: () => import('./ioni-antion-sheet/ioni-antion-sheet.module').then( m => m.IoniAntionSheetPageModule)
  },
  {
    path: 'ion-action-sheet-controller',
    loadChildren: () => import('./ion-action-sheet-controller/ion-action-sheet-controller.module').then( m => m.IonActionSheetControllerPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
