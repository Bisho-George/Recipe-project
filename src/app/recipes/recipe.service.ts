import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Ingredients } from '../shared/ingredients.model';
import { ShoppingListService } from '../shopping-list/shopping-service.service';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
  // private recipes: Recipe[] = [
  //   new Recipe(
  //     'Chicken',
  //     'It is a fried chicken',
  //     'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/11/2/0/DV1510H_fried-chicken-recipe-10_s4x3.jpg.rend.hgtvcom.826.620.suffix/1568222255998.jpeg',
  //     [new Ingredients('Chicken', 10), new Ingredients('Beef', 15)],
  //   ),
  //   new Recipe(
  //     'Meat',
  //      'It\'s a delcious meat',
  //     'https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/newscms/2019_21/2870431/190524-classic-american-cheeseburger-ew-207p.jpg',
  //     [new Ingredients('Meat', 20), new Ingredients('Burger', 25)],
  //   ),
  // ]
  private recipes: Recipe[] = [];
  constructor(
    private slServices: ShoppingListService,
    private router: Router
  ) {}

  getRecipes() {
    return this.recipes.slice();
  }
  addIngredientsToShoppingList(ingredient: Ingredients[]) {
    this.slServices.addIngredients(ingredient);
  }
  getRecipeById(recipeId: number) {
    return this.recipes[recipeId];
  }
  addRecipes(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }
  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }
}
