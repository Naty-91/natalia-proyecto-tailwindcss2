import { Component } from '@angular/core';
import { RouterLink } from '@angular/router'; 

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  toggleDropdown(): void {
    const dropdown = document.getElementById("user-menu") as HTMLElement;
    if (dropdown) {
      dropdown.classList.toggle("hidden");
    }
  }

  
  }

