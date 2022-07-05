import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficharticlebycategorieComponent } from './afficharticlebycategorie.component';

describe('AfficharticlebycategorieComponent', () => {
  let component: AfficharticlebycategorieComponent;
  let fixture: ComponentFixture<AfficharticlebycategorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficharticlebycategorieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficharticlebycategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
