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
    path: 'ion-badge',
    loadChildren: () => import('./ion-badge/ion-badge.module').then( m => m.IonBadgePageModule)
  },
  {
    path: 'ion-button',
    loadChildren: () => import('./ion-button/ion-button.module').then( m => m.IonButtonPageModule)
  },
  {
    path: 'ion-ripple-effect',
    loadChildren: () => import('./ion-ripple-effect/ion-ripple-effect.module').then( m => m.IonRippleEffectPageModule)
  },
  {
    path: 'ion-card',
    loadChildren: () => import('./ion-card/ion-card.module').then( m => m.IonCardPageModule)
  },
  {
    path: 'ion-checkbox',
    loadChildren: () => import('./ion-checkbox/ion-checkbox.module').then( m => m.IonCheckboxPageModule)
  },
  {
    path: 'ion-chip',
    loadChildren: () => import('./ion-chip/ion-chip.module').then( m => m.IonChipPageModule)
  },
  {
    path: 'ion-content',
    loadChildren: () => import('./ion-content/ion-content.module').then( m => m.IonContentPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
