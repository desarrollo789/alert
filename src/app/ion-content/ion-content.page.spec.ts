import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IonContentPage } from './ion-content.page';

describe('IonContentPage', () => {
  let component: IonContentPage;
  let fixture: ComponentFixture<IonContentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonContentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IonContentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
