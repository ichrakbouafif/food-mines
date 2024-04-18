import { Component } from '@angular/core';
import { CartService } from '../services/cart/cart.service';
import { Cart } from '../shared/models/Cart';
import { Cartitem } from '../shared/models/Cartitem';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FoodService } from '../services/food/food.service';
import { NotFoundComponent } from '../not-found/not-found.component';


@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [CommonModule,RouterLink,NotFoundComponent],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css'
})
export class CartPageComponent {
  cart!:Cart;
  constructor(private cartService:CartService,private foodService:FoodService){
    let foods = foodService.getAll();
    cartService.addToCart(foods[1]);
    cartService.addToCart(foods[3]);
    cartService.addToCart(foods[5]);

    this.setCart();
  }

  removeFromCart(cartitem:Cartitem){
    this.cartService.removeFromCart(cartitem.food.id);
    this.setCart();
  }

  changQuantity(cartitem:Cartitem,quantityInString:string){
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartitem.food.id,quantity);
    this.setCart();
  }

  setCart(){
    this.cart = this.cartService.getCart();
  }

}
