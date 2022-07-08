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
import { PanierComponent } from 'app/pages/panier/panier.component';
import {MatIconModule} from '@angular/material/icon'
import { ConsoledujeuxComponent } from 'app/pages/afficharticlebycategorie/consoledujeux/consoledujeux.component';
import { PcportableComponent } from 'app/pages/afficharticlebycategorie/pcportable/pcportable.component';
import { UnitegamingComponent } from 'app/pages/afficharticlebycategorie/unitegaming/unitegaming.component';
import { PerepheriquepcgamingComponent } from 'app/pages/afficharticlebycategorie/perepheriquepcgaming/perepheriquepcgaming.component';
import { ComposantpcgamingComponent } from 'app/pages/afficharticlebycategorie/composantpcgaming/composantpcgaming.component';
import { TabletteComponent } from 'app/pages/afficharticlebycategorie-univers-informatique/tablette/tablette.component';
import { PcPortableComponent } from 'app/pages/afficharticlebycategorie-univers-informatique/pc-portable/pc-portable.component';
import { PcbureauComponent } from 'app/pages/afficharticlebycategorie-univers-informatique/pcbureau/pcbureau.component';
import { PrefaccessstockComponent } from 'app/pages/afficharticlebycategorie-univers-informatique/prefaccessstock/prefaccessstock.component';
import { ComposantetmaintComponent } from 'app/pages/afficharticlebycategorie-univers-informatique/composantetmaint/composantetmaint.component';
import { SmartphoneComponent } from 'app/pages/afficharticlebycategorie-univers-telephonie/smartphone/smartphone.component';
import { AppleComponent } from 'app/pages/afficharticlebycategorie-univers-telephonie/apple/apple.component';
import { GsmComponent } from 'app/pages/afficharticlebycategorie-univers-telephonie/gsm/gsm.component';
import { TelephonefixeComponent } from 'app/pages/afficharticlebycategorie-univers-telephonie/telephonefixe/telephonefixe.component';
import { AccestelComponent } from 'app/pages/afficharticlebycategorie-univers-telephonie/accestel/accestel.component';
import { SmartwatchComponent } from 'app/pages/afficharticlebycategorie-univers-telephonie/smartwatch/smartwatch.component';
import { PassercommandedialogComponent } from 'app/pages/passercommandedialog/passercommandedialog.component';

import { MatSidenavModule } from '@angular/material/sidenav';






@NgModule({
  declarations: [
    AfficharticlebycategorieComponent,
    AfficharticlebycategorieUniversTelephonieComponent,
    AfficharticlebycategorieUniversInformatiqueComponent,
    PanierComponent,
    ConsoledujeuxComponent,
    PcportableComponent,
    UnitegamingComponent,
    PerepheriquepcgamingComponent,
    ComposantpcgamingComponent,
    TabletteComponent,
    PcPortableComponent,
    PcbureauComponent,
    PrefaccessstockComponent,
    ComposantetmaintComponent,
    SmartphoneComponent,
    AppleComponent,
    GsmComponent,
    TelephonefixeComponent,
    AccestelComponent,
    SmartwatchComponent,
    PassercommandedialogComponent,


   

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
    MatIconModule,
    MatSidenavModule,
    
  ]
})
export class UserLayoutModule { }
