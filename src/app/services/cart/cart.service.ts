import { Injectable } from '@angular/core';
import { Cart } from '../../shared/models/Cart';
import { Food } from '../../shared/models/food';
import { Cartitem } from '../../shared/models/Cartitem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Cart = new Cart();
  
  addToCart(food: Food): void {
    let cartitem = this.cart.items.find(item => item.food.id === food.id);
    if (cartitem) {
      this.changeQuantity(food.id, cartitem.quantity + 1);
      return;
    }
    this.cart.items.push(new Cartitem(food));
  }

  removeFromCart(foodid :number):void{
    this.cart.items = this.cart.items.filter(item => item.food.id != foodid);
  }
  changeQuantity(foodid:number,quantity:number){
    let cartitem = this.cart.items.find(item => item.food.id === foodid);
    if(!cartitem) return;
    cartitem.quantity = quantity;
  }
  getCart():Cart{
    return this.cart;
  }
}
