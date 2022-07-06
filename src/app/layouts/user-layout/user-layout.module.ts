import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserLayoutRoutingModule } from './user-layout-routing.module';

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
import { AfficharticlebycategorieUniversTelephonieComponent } from 'app/pages/afficharticlebycategorie-univers-telephonie/afficharticlebycategorie-univers-telephonie.component';
import { AfficharticlebycategorieUniversInformatiqueComponent } from 'app/pages/afficharticlebycategorie-univers-informatique/afficharticlebycategorie-univers-informatique.component';




@NgModule({
  declarations: [
    AfficharticlebycategorieComponent,
    AfficharticlebycategorieUniversTelephonieComponent,
    AfficharticlebycategorieUniversInformatiqueComponent,

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
