import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IonRippleEffectPage } from './ion-ripple-effect.page';

describe('IonRippleEffectPage', () => {
  let component: IonRippleEffectPage;
  let fixture: ComponentFixture<IonRippleEffectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonRippleEffectPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IonRippleEffectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
