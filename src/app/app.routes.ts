import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main-part-of-website/main/main.component';
import { GallaryComponent } from './main-part-of-website/gallary/gallary.component';
import { RestaurantMenuComponent } from './banquet-restaurant-part/restaurant-menu/restaurant-menu.component';

export const routes: Routes = [

  {
    path: 'login',
    component: LoginComponent,
    title: 'LogIn'
  },
  {
    path: 'gallery',
    component: GallaryComponent,
    title: 'gallery'
  },
  {
    path: 'Menu',
    component:RestaurantMenuComponent,
    title: 'Menu'
  },
  {
    path: '',
    component: MainComponent,
    title: 'Welcome to Aatithya Banquet & Restaurant'
  },

];
