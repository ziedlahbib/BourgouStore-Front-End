import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AfficharticlebycategorieComponent } from 'app/pages/afficharticlebycategorie/afficharticlebycategorie.component';

const routes: Routes = [
    { path: 'AfficharticlebycategorieComponent',        component: AfficharticlebycategorieComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserLayoutRoutingModule { }
