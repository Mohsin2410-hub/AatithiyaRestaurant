import { Component, signal } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { SidNavComponent } from '../sid-nav/sid-nav.component';
import { CommonModule, NgClass } from '@angular/common';
import { RouterOutlet } from '@angular/router';

const heading = signal("");

export function changeHeading(change: string) {
  heading.set(`${change}`);
}

export function getHeading() {
  return heading();
}

@Component({
  selector: 'app-saidbar-admin',
  imports: [HeaderComponent,SidNavComponent, NgClass, RouterOutlet],
  templateUrl: './saidbar-admin.component.html',
  styleUrl: './saidbar-admin.component.css'
})
export class SaidbarAdminComponent {
 title = 'HeaderSideNav';
 sideNavStatus: boolean = false;
 getHeading = getHeading;
 setHeading = changeHeading;

 constructor()
 {
  this.setHeading("Welcome to Aatithya Banquet & Restaurant");
  console.log(heading());
  console.log(this.getHeading())
 }
}