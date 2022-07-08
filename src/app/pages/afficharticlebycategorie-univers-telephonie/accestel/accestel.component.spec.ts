import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccestelComponent } from './accestel.component';

describe('AccestelComponent', () => {
  let component: AccestelComponent;
  let fixture: ComponentFixture<AccestelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccestelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccestelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
