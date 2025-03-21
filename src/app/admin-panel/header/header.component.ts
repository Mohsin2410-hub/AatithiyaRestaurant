import { Component, EventEmitter, OnInit, Output, output } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
 @Output() sideNaveToggled = new EventEmitter<boolean>();
 menuStatus: boolean = false;

  constructor(){ }

  ngOnInit(): void {
    
  }

  SideNavToggle(){
    this.menuStatus = !this.menuStatus;
    this.sideNaveToggled.emit(this.menuStatus);
  }
}
