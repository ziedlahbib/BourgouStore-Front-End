import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcbureauComponent } from './pcbureau.component';

describe('PcbureauComponent', () => {
  let component: PcbureauComponent;
  let fixture: ComponentFixture<PcbureauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PcbureauComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PcbureauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
