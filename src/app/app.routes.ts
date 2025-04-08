import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main-part-of-website/main/main.component';
import { GallaryComponent } from './main-part-of-website/gallary/gallary.component';
import { RestaurantMenuComponent } from './banquet-restaurant-part/restaurant-menu/restaurant-menu.component';
import { HomeDetailsComponent } from './admin-panel/home-details/home-details.component';
import { AboutDetailsComponent } from './admin-panel/about-details/about-details.component';
import { FoodTypeDetailsComponent } from './admin-panel/food-type-details/food-type-details.component';
import { BaquetDetailsComponent } from './admin-panel/baquet-details/baquet-details.component';
import { RestaurantDetailsComponent } from './admin-panel/restaurant-details/restaurant-details.component';
import { ContactUsDetailsComponent } from './admin-panel/contact-us-details/contact-us-details.component';
import { GalleryDetailsComponent } from './admin-panel/gallery-details/gallery-details.component';
import { SaidbarAdminComponent } from './admin-panel/saidbar-admin/saidbar-admin.component';

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
  {
    path: 'home',
    component: HomeDetailsComponent,
    title: 'Home'
},
{
    path: 'about-us',
    component: AboutDetailsComponent,
    title: 'About-us'
},
{
    path: 'food-type',
    component: FoodTypeDetailsComponent,
    title: 'Food-type'
},
{
    path: 'banquet',
    component: BaquetDetailsComponent,
    title: 'Banquet'
},
{
    path: 'restaurant',
    component: RestaurantDetailsComponent,
    title: 'Restaurant'
},
{
    path: 'contact-us',
    component: ContactUsDetailsComponent,
    title: 'Contact-us'
},
{
    path: 'gallery',
    component: GalleryDetailsComponent,
    title: 'Gallery'
},
{
  path: 'afterLogin',
  component: SaidbarAdminComponent,
  title: 'After Login'
},
{
  path: 'changeDefaultImage',
  loadChildren: () => import('./change-default-images/change-default-images.module').then((m) => m.ChangeDefaultImagesModule),
  title: "Change Default Image Path"
}

];
