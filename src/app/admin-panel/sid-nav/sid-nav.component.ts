import { CommonModule, NgClass } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-sid-nav',
  imports: [RouterLink],
  templateUrl: './sid-nav.component.html',
  styleUrl: './sid-nav.component.css'
})
export class SidNavComponent implements OnInit{
 
  @Input() sideNavStatus: boolean = false;


  constructor(private _router: Router) {}

  ngOnInit(): void {
    
  }
  
  logout()
  {
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    this._router.navigate([""])
  }
}
