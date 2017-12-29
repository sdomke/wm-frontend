import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IcehockeyComponent } from './icehockey.component';

describe('IcehockeyComponent', () => {
  let component: IcehockeyComponent;
  let fixture: ComponentFixture<IcehockeyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IcehockeyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IcehockeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
