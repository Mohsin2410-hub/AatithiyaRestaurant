import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { AboutUSComponent } from '../about-us/about-us.component';
import { FoodtypeComponent } from '../foodtype/foodtype.component';
import { BanquetRestaurentComponent } from '../banquet-restaurent/banquet-restaurent.component';
import { ContactComponent } from '../contact-us/contact-us.component';

@Component({
  selector: 'app-main',
  imports: [NavbarComponent,AboutUSComponent, FoodtypeComponent, BanquetRestaurentComponent, ContactComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
