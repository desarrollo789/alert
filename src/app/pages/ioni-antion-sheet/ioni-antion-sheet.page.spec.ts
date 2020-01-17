import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IoniAntionSheetPage } from './ioni-antion-sheet.page';

describe('IoniAntionSheetPage', () => {
  let component: IoniAntionSheetPage;
  let fixture: ComponentFixture<IoniAntionSheetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IoniAntionSheetPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IoniAntionSheetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
