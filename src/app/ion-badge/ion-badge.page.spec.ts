import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IonBadgePage } from './ion-badge.page';

describe('IonBadgePage', () => {
  let component: IonBadgePage;
  let fixture: ComponentFixture<IonBadgePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonBadgePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IonBadgePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
