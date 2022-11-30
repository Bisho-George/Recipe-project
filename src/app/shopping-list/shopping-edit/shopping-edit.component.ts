import { Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { Ingredients } from 'src/app/shared/ingredients.model';
import { ShoppingListService } from '../shopping-service.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput',) nameInp: ElementRef;
  @ViewChild('amountInput') amountInp: ElementRef;
  constructor(private slServices: ShoppingListService) { }

  ngOnInit(): void {
  }
  onAddItem() {
    const name = this.nameInp.nativeElement.value;
    const amount = this.amountInp.nativeElement.value;
    const newIngredient = new Ingredients(name, amount);
    this.slServices.onIngredientAdded(newIngredient);
  }
}
