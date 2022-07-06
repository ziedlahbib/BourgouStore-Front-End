import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToastrModule } from "ngx-toastr";



import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { HttpClientModule } from "@angular/common/http";

import { ReactiveFormsModule } from "@angular/forms";
import { UserLayoutComponent } from "./layouts/user-layout/user-layout.component";
import { ComponentsModule } from "./components/components.module";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FooterComponent } from "./components/footer/footer.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { NavbarFrontComponent } from "./components/navbar-front/navbar-front.component";
import { FooterFrontComponent } from "./components/footer-front/footer-front.component";









@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    UserLayoutComponent,

    FooterComponent,
    NavbarComponent,
    SidebarComponent,

    NavbarFrontComponent,
    FooterFrontComponent,


    
  ],
  imports: [
    BrowserAnimationsModule,
 RouterModule.forRoot(AppRoutes,{
      useHash: true
    }),
    
    ToastrModule.forRoot(),

    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,

    

  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,

    NavbarFrontComponent,
    FooterFrontComponent,


  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
