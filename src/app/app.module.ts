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
import {MatDialogModule} from '@angular/material/dialog';

















@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    UserLayoutComponent,

    
  


   
  

   


    
  ],
  imports: [
    BrowserAnimationsModule,
 RouterModule.forRoot(AppRoutes,{
      useHash: true
    }),
    
    ToastrModule.forRoot(),
    ComponentsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    MatDialogModule


    

  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
