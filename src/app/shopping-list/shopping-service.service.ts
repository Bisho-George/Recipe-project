import { EventEmitter, Injectable } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  private ingredients = [
    new Ingredients('Apples', 20),
    new Ingredients('Oranges', 10),
  ];
  ingredientsChanged = new EventEmitter<Ingredients[]>();
  constructor() { }
  getIngredients() {
    return this.ingredients.slice();
  }
  onIngredientAdded(ingredient: Ingredients) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.getIngredients());

  }
  addIngredients(ingredients: Ingredients[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
