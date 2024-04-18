import { Component, Input } from '@angular/core';
import { Tag } from '../shared/models/Tag';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-tags',
  standalone: true,
  imports: [CommonModule,NgFor,NgIf,RouterModule],
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.css'
})
export class TagsComponent {
  @Input()
  foodPageTags?:string[];

  @Input()
  justifyContenet:string = 'center';

  tags?:Tag[];
  constructor(private foodService:FoodService){}
}
