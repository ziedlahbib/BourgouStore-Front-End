import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterFrontComponent } from './footer-front/footer-front.component';
import { NavbarFrontComponent } from './navbar-front/navbar-front.component';
import {MatBadgeModule} from '@angular/material/badge';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    MatBadgeModule
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,

    NavbarFrontComponent,
    FooterFrontComponent,



  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,

    NavbarFrontComponent,
    FooterFrontComponent,


  ]
})
export class ComponentsModule { }
