import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoggingService } from '../logging.service';
import { Ingredients } from '../shared/ingredients.model';
import { ShoppingListService } from './shopping-service.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredients[];
  private ingredientsChangeSub: Subscription;
  constructor(
    private shoppingListService: ShoppingListService,
    private loggingService: LoggingService
  ) {}

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
    this.ingredientsChangeSub =
      this.shoppingListService.ingredientsChanged.subscribe(
        (ingredients: Ingredients[]) => {
          this.ingredients = ingredients;
        }
      );
    this.loggingService.printLog('Hello from shoppinglist component');
  }
  ngOnDestroy(): void {
    this.ingredientsChangeSub.unsubscribe();
  }
  onEditItem(index: number) {
    this.shoppingListService.startedEditing.next(index);
  }
}
