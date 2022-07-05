import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'ni-chart-bar-32 text-info', class: '' },
//  { path: '/icons', title: 'Icons',  icon:'ni-planet text-light', class: '' },
//  { path: '/maps', title: 'Maps',  icon:'ni-pin-3 text-light', class: '' },
//  { path: '/user-profile', title: 'User profile',  icon:'ni-circle-08 text-light', class: '' },
//  { path: '/tables', title: 'Tables',  icon:'ni-bullet-list-67 text-light', class: '' },
//  { path: '/login', title: 'Login',  icon:'ni-key-25 text-light', class: '' },
//  { path: '/register', title: 'Register',  icon:'ni-circle-08 text-light', class: '' },
    { path: '/afficherarticle', title: 'article Management',  icon:'ni-single-02 text-yellow', class: '' },


];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  }
}
