import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { UserLayoutComponent } from './layouts/user-layout/user-layout.component';

export const AppRoutes: Routes = [
  /*{
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }, */
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
        {
      path: '',
      loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(x => x.AdminLayoutModule)
  }]},
  {
    path: 'user',
    component: UserLayoutComponent,
    children: [
        {
      path: '',
      loadChildren: () => import('./layouts/user-layout/user-layout.module').then(x => x.UserLayoutModule)
  }]},
  {
    path: '**',
    redirectTo: 'dashboard'
  }
]
