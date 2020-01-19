import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor( private router: Router) {}

  navigateToAlertas() {
    this.router.navigate(['/alerta']);
  }
  navigateToIonactionsheet() {
    this.router.navigate(['/ioni-antion-sheet']);
  }
  navigateToionbadge(){
    this.router.navigate(['/ion-badge']);
  }
  navigateToionbutton(){
    this.router.navigate(['/ion-button']);
  }
  navigateToionrippleeffect(){
    this.router.navigate(['/ion-ripple-effect']);
  }
  navigateToioncard(){
    this.router.navigate(['/ion-card']);
  }
  navigateToioncheckbox(){
    this.router.navigate(['/ion-checkbox']);
  }
  navigateToionchip(){
    this.router.navigate(['/ion-chip']);
  }
  navigateToioncontent(){
    this.router.navigate(['/ion-content']);
  }
}
