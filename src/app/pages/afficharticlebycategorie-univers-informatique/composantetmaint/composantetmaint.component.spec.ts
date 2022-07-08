import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposantetmaintComponent } from './composantetmaint.component';

describe('ComposantetmaintComponent', () => {
  let component: ComposantetmaintComponent;
  let fixture: ComponentFixture<ComposantetmaintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComposantetmaintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComposantetmaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
