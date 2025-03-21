import { CommonModule, NgClass } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sid-nav',
  imports: [RouterLink],
  templateUrl: './sid-nav.component.html',
  styleUrl: './sid-nav.component.css'
})
export class SidNavComponent implements OnInit{
 
  @Input() sideNavStatus: boolean = false;


  constructor() {}

  ngOnInit(): void {
    
  }
  
}
