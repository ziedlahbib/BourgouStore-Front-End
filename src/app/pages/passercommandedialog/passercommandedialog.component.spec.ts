import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassercommandedialogComponent } from './passercommandedialog.component';

describe('PassercommandedialogComponent', () => {
  let component: PassercommandedialogComponent;
  let fixture: ComponentFixture<PassercommandedialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassercommandedialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PassercommandedialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
