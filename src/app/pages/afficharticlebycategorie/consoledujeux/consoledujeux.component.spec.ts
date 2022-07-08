import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsoledujeuxComponent } from './consoledujeux.component';

describe('ConsoledujeuxComponent', () => {
  let component: ConsoledujeuxComponent;
  let fixture: ComponentFixture<ConsoledujeuxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsoledujeuxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsoledujeuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
