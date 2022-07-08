import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerepheriquepcgamingComponent } from './perepheriquepcgaming.component';

describe('PerepheriquepcgamingComponent', () => {
  let component: PerepheriquepcgamingComponent;
  let fixture: ComponentFixture<PerepheriquepcgamingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerepheriquepcgamingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerepheriquepcgamingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
