import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitegamingComponent } from './unitegaming.component';

describe('UnitegamingComponent', () => {
  let component: UnitegamingComponent;
  let fixture: ComponentFixture<UnitegamingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnitegamingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitegamingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
