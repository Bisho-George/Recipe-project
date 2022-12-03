import { Component, EventEmitter, OnInit, Input } from '@angular/core';
import { RecipeService } from '../recipe-service.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  constructor(private recipeService : RecipeService) { }
  @Input() recipe: Recipe;
  ngOnInit(): void {
  }
  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients)
  }

}
