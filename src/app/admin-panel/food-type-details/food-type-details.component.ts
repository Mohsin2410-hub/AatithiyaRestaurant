import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { changeHeading, getHeading } from '../saidbar-admin/saidbar-admin.component';

@Component({
  selector: 'app-food-type-details',
  imports: [NgClass],
  templateUrl: './food-type-details.component.html',
  styleUrl: './food-type-details.component.css'
})
export class FoodTypeDetailsComponent {
  sideNavStatus: boolean = false;
  
    getHeading = getHeading;
    setHeading = changeHeading;
  
    constructor() {
      this.setHeading("Food-type");
    }

}
