import { Component, OnDestroy, OnInit } from '@angular/core'
import { Subscription } from 'rxjs';
import { Ingredients } from '../shared/ingredients.model'
import { ShoppingListService } from './shopping-service.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredients[];
  private ingredientsChangeSub: Subscription;
  constructor(private shoppingListService : ShoppingListService) {}

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
    this.ingredientsChangeSub = this.shoppingListService.ingredientsChanged.subscribe(
      (ingredients: Ingredients[]) => {
        this.ingredients = ingredients;
      }
    ) 
  }
  ngOnDestroy(): void {
    this.ingredientsChangeSub.unsubscribe();
  }
  onEditItem (index: number) {
    this.shoppingListService.startedEditing.next(index);
  }
  

}
