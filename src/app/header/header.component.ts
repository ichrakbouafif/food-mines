import { Component } from '@angular/core';
import { CartPageComponent } from '../cart-page/cart-page.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CartPageComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
