import { Component, effect } from '@angular/core';
import { Route, Router, RouterLink, RouterOutlet } from '@angular/router';
import { SaidbarAdminComponent } from "./admin-panel/saidbar-admin/saidbar-admin.component";
import { getToken, token } from '../apiServices/globals';
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
  constructor(
    private _router: Router
  )
  {
    this.tkn = localStorage.getItem('token') || "";
    if (this.tokenExists())
    {
      window.alert("Already logged in on different session, directly going back in");
      this._router.navigate(["/home"])
    }
  }

  logout()
  {
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    this._router.navigate([""])
  }

  tokenExists() {
    if (getToken()) return true;
    return false;
  }
  check()
  {
    console.log(this.tokenExists());
  }
}
