import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SaidbarAdminComponent } from "./admin-panel/saidbar-admin/saidbar-admin.component";
import { getToken } from '../apiServices/globals';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SaidbarAdminComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'aatithya'; 
  token: string|null = "";
  constructor()
  {
    this.token = getToken();
  }
  tokenExists() {
    console.log(this.token);
    if (this.token) return true;
    return false;
  }
}
