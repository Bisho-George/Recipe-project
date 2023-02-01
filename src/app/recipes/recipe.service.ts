import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { Ingredients } from '../shared/ingredients.model'
import { ShoppingListService } from '../shopping-list/shopping-service.service'
import { Recipe } from './recipe.model'

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/11/2/0/DV1510H_fried-chicken-recipe-10_s4x3.jpg.rend.hgtvcom.826.620.suffix/1568222255998.jpeg',
      [new Ingredients('Chicken', 10), new Ingredients('Beef', 15)],
    ),
    new Recipe(
      'Another Test Recipe',
      'This is simply a test',
      'https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/newscms/2019_21/2870431/190524-classic-american-cheeseburger-ew-207p.jpg',
      [new Ingredients('Meat', 20), new Ingredients('Burger', 25)],
    ),
  ]
  getRecipes() {
    return this.recipes.slice()
  }
  addIngredientsToShoppingList(ingredient: Ingredients[]) {
    this.slServices.addIngredients(ingredient);
  }
  getRecipeById (recipeId: number) {
    return this.recipes[recipeId];
  }

  constructor(private slServices: ShoppingListService, private router: Router) {}
}
