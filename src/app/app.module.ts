import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToastrModule } from "ngx-toastr";

import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { FixedPluginModule} from './shared/fixedplugin/fixedplugin.module';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { HttpClientModule } from "@angular/common/http";
import { AjoutArticleComponent } from './pages/article-managment/ajout-article/ajout-article.component';
import { ReactiveFormsModule } from "@angular/forms";
import { UserLayoutComponent } from './src/app/layouts/user-layout/user-layout.component';




@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AjoutArticleComponent,
    UserLayoutComponent,
    
  ],
  imports: [
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes,{
      useHash: true
    }),
    SidebarModule,
    NavbarModule,
    ToastrModule.forRoot(),
    FooterModule,
    FixedPluginModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
