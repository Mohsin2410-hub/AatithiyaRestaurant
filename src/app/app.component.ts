import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SaidbarAdminComponent } from "./admin-panel/saidbar-admin/saidbar-admin.component";
import { getToken } from '../apiServices/globals';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SaidbarAdminComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'aatithya'; 
  tkn: string
  constructor()
  {
    this.tkn = localStorage.getItem('token') || "";
  }
  tokenExists() {
    if (getToken()) return true;
    return false;
  }
  check()
  {
    console.log(this.tokenExists())
  }
}
