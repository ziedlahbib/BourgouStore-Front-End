import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficharticlebycategorieUniversTelephonieComponent } from './afficharticlebycategorie-univers-telephonie.component';

describe('AfficharticlebycategorieUniversTelephonieComponent', () => {
  let component: AfficharticlebycategorieUniversTelephonieComponent;
  let fixture: ComponentFixture<AfficharticlebycategorieUniversTelephonieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficharticlebycategorieUniversTelephonieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficharticlebycategorieUniversTelephonieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
