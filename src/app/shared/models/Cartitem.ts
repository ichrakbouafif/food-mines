import { Food } from "./food";

export class Cartitem {
    constructor(food:Food){
        this.food =food;
        this.getPrice;
    }
    food:Food;
    quantity:number =1

    getPrice():number{
        return this.food.price * this.quantity;
    }
}