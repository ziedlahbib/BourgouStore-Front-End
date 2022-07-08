import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposantpcgamingComponent } from './composantpcgaming.component';

describe('ComposantpcgamingComponent', () => {
  let component: ComposantpcgamingComponent;
  let fixture: ComponentFixture<ComposantpcgamingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComposantpcgamingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComposantpcgamingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
