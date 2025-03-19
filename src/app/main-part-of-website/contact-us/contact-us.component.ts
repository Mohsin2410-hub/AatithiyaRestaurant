import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactComponent implements AfterViewInit {
  ngAfterViewInit() {
    // Get all input elements with the class 'input'
    const inputs = document.querySelectorAll<HTMLInputElement>(".input");

    // Define the focus function
    function focusFunc(this: HTMLInputElement) {
      const parent = this.parentNode as HTMLElement;
      parent.classList.add("focus");
    }

    // Define the blur function
    function blurFunc(this: HTMLInputElement) {
      const parent = this.parentNode as HTMLElement;
      if (this.value === "") {
        parent.classList.remove("focus");
      }
    }

    // Attach event listeners to each input element
    inputs.forEach((input) => {
      input.addEventListener("focus", focusFunc);
      input.addEventListener("blur", blurFunc);
    });
  }
}
