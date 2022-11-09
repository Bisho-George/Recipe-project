import { Component, OnInit } from '@angular/core'
import { Ingredients } from '../shared/ingredients.model'

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredients[]
  constructor() {}

  ngOnInit(): void {
    this.ingredients = [
      new Ingredients('Apples', 20),
      new Ingredients('Oranges', 10),
    ]
  }


  onIngredientAdded(ingredient: Ingredients) {
    this.ingredients.push(ingredient);
  }
}
