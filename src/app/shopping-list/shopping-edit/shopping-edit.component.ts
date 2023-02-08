import { Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { Subscription } from 'rxjs';
import { FormGroup, FormsModule, NgForm } from '@angular/forms';
import { Ingredients } from 'src/app/shared/ingredients.model';
import { ShoppingListService } from '../shopping-service.service';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit , OnDestroy{
  editMode = false;
  subscription: Subscription;
  editedItemIndex: number;
  editedItem: Ingredients;
  @ViewChild('f')slForm: NgForm;
  constructor(private slServices: ShoppingListService) { }
  

  ngOnInit(): void {
    this.subscription = this.slServices.startedEditing.subscribe (
      (index: number) => {
        this.editMode = true;
        this.editedItemIndex = index;
        this.editedItem = this.slServices.getIngredient(index);
        this.slForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        })
      }
    )
  }
  onSubmit(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredients(value.name, value.amount);
    if (this.editMode) {
      this.slServices.updateIngredient(this.editedItemIndex, newIngredient);
    }
    else {
      this.slServices.addIngredient(newIngredient);
    }
    this.editMode = false;
    form.reset();
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  onClear () {
    this.slForm.reset();
    this.editMode = false; 
  }
  onDeleteItem () {
    this.slServices.deleteIngredient(this.editedItemIndex);
    this.onClear();
  }


 
}
