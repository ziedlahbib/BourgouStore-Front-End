import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrefaccessstockComponent } from './prefaccessstock.component';

describe('PrefaccessstockComponent', () => {
  let component: PrefaccessstockComponent;
  let fixture: ComponentFixture<PrefaccessstockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrefaccessstockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrefaccessstockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
