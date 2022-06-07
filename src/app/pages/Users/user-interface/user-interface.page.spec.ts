import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UserInterfacePage } from './user-interface.page';

describe('UserInterfacePage', () => {
  let component: UserInterfacePage;
  let fixture: ComponentFixture<UserInterfacePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserInterfacePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UserInterfacePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
