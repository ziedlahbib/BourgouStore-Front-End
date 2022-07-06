import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AfficharticlebycategorieUniversInformatiqueComponent } from 'app/pages/afficharticlebycategorie-univers-informatique/afficharticlebycategorie-univers-informatique.component';
import { AfficharticlebycategorieUniversTelephonieComponent } from 'app/pages/afficharticlebycategorie-univers-telephonie/afficharticlebycategorie-univers-telephonie.component';
import { AfficharticlebycategorieComponent } from 'app/pages/afficharticlebycategorie/afficharticlebycategorie.component';

const routes: Routes = [
    { path: 'AfficharticlebycategorieComponent',        component: AfficharticlebycategorieComponent },
    { path: 'AfficharticlebycategorieUniversInformatiqueComponent',        component: AfficharticlebycategorieUniversInformatiqueComponent },
    { path: 'AfficharticlebycategorieUniversTelephonieComponent',        component: AfficharticlebycategorieUniversTelephonieComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserLayoutRoutingModule { }
