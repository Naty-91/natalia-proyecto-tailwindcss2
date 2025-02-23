import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./layout/footer/footer.component";
import { HeaderComponent } from "./layout/header/header.component";
import { NavbarComponent } from "./layout/navbar/navbar.component";


@Component({
  selector: 'app-root',
  imports: [FooterComponent, HeaderComponent, NavbarComponent,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'maquetacion-tailwindcss';
}