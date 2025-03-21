import { Component } from '@angular/core';
import { changeHeading, getHeading } from '../saidbar-admin/saidbar-admin.component';
import { NgClass } from '@angular/common';
@Component({
  selector: 'app-contact-us-details',
  imports: [NgClass],
  templateUrl: './contact-us-details.component.html',
  styleUrl: './contact-us-details.component.css'
})
export class ContactUsDetailsComponent {
  sideNavStatus: boolean = false;

  getHeading = getHeading;
  setHeading = changeHeading;

  constructor() {
    this.setHeading("Contact-us");
  }

}
