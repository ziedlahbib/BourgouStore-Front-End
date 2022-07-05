import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserLayoutRoutingModule } from './user-layout-routing.module';
import { UserLayoutComponent } from './user-layout.component';
import { NavbarFrontComponent } from 'app/navbar-front/navbar-front.component';
import { AfficharticlebycategorieComponent } from 'app/pages/afficharticlebycategorie/afficharticlebycategorie.component';
////////////////////////////////////////
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//////////////////////////////////////////////:
import {MatPaginatorModule} from '@angular/material/paginator';
import { ViewChild} from '@angular/core';;
import {MatSort, SortDirection} from '@angular/material/sort';
import { MatTableDataSource,MatTableModule } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';

import { MatChipsModule } from '@angular/material/chips';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import { ArticleManagmentComponent } from 'app/pages/article-managment/article-managment.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterFrontComponent } from 'app/footer-front/footer-front.component';



@NgModule({
  declarations: [
    UserLayoutComponent,
    NavbarFrontComponent,
    FooterFrontComponent,
    AfficharticlebycategorieComponent,
  ],
  imports: [
    CommonModule,
    UserLayoutRoutingModule,
    NgbModule,
    HttpClientModule,
    MatPaginatorModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
  ]
})
export class UserLayoutModule { }
