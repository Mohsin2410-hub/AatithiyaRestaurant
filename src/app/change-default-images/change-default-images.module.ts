import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BanquetDetailComponent } from './banquet-detail/banquet-detail.component';
import { RestaurantDetailsComponent } from './restaurant-details/restaurant-details.component';
import { FoodTypeComponent } from './food-type/food-type.component';
import { DefaultVieeComponent } from './default-viee/default-viee.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultVieeComponent,
    title: "Default view change for admins"
  },
  {
    path: "foodTypeImageChange",
    component: FoodTypeComponent,
    title: "Change food type images"
  },
  {
    path: "banquetImageChange",
    component: BanquetDetailComponent,
    title: "Change banquet images"
  },
  {
    path: "restaurantImageChange",
    component: RestaurantDetailsComponent,
    title: "Change restaurant images"
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ChangeDefaultImagesModule { }
