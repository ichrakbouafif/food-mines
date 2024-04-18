import { Component, NgModule } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { CommonModule } from '@angular/common';
import { Food } from '../shared/models/food';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { SearchComponent } from '../search/search.component';
import { TagsComponent } from '../tags/tags.component';
import { NotFoundComponent } from '../not-found/not-found.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,SearchComponent,TagsComponent,RouterModule,NotFoundComponent],

  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  foods: Food[] = [];

  constructor(private foodService: FoodService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      if (params['searchTerm']) {
        this.foods = this.foodService.getAll().filter(food =>
          food.name.toLowerCase().includes(params['searchTerm'].toLowerCase())
        );
      }
      else if (params['tag']){
        this.foods = this.foodService.getAllFoodsByTag(params['tag']);
      }
      else {
        this.foods = this.foodService.getAll();

      }
    });
  }
}

