import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { changeHeading, getHeading } from '../saidbar-admin/saidbar-admin.component';

@Component({
  selector: 'app-about-details',
  imports: [NgClass],
  templateUrl: './about-details.component.html',
  styleUrl: './about-details.component.css'
})
export class AboutDetailsComponent {
   sideNavStatus: boolean = false;
  
   getHeading = getHeading;
   setHeading = changeHeading;
  
   constructor()
   {
    this.setHeading("About-us");
   }

}
