import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficharticlebycategorieUniversInformatiqueComponent } from './afficharticlebycategorie-univers-informatique.component';

describe('AfficharticlebycategorieUniversInformatiqueComponent', () => {
  let component: AfficharticlebycategorieUniversInformatiqueComponent;
  let fixture: ComponentFixture<AfficharticlebycategorieUniversInformatiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficharticlebycategorieUniversInformatiqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficharticlebycategorieUniversInformatiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
