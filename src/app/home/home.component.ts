import { Component, NgModule } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { CommonModule } from '@angular/common';
import { Food } from '../shared/models/food';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],

  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  foods:Food[]=this.foodService.getAll();
  constructor(private foodService : FoodService){}

}
