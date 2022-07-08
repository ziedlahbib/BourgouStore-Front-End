import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelephonefixeComponent } from './telephonefixe.component';

describe('TelephonefixeComponent', () => {
  let component: TelephonefixeComponent;
  let fixture: ComponentFixture<TelephonefixeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelephonefixeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelephonefixeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
