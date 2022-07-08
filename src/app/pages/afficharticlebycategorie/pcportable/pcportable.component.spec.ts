import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcportableComponent } from './pcportable.component';

describe('PcportableComponent', () => {
  let component: PcportableComponent;
  let fixture: ComponentFixture<PcportableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PcportableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PcportableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
