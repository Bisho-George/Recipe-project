import { Component, ElementRef, OnInit, ViewChild,EventEmitter, Output } from '@angular/core';
import { Ingredients } from 'src/app/shared/ingredients.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput',) nameInp: ElementRef;
  @ViewChild('amountInput') amountInp: ElementRef;

  @Output() newItemEvent = new EventEmitter<Ingredients>();
  constructor() { }

  ngOnInit(): void {
  }
  onAddItem() {
    const name = this.nameInp.nativeElement.value;
    const amount = this.amountInp.nativeElement.value;
    const newIngredient = new Ingredients(name, amount);
    this.newItemEvent.emit(newIngredient);
  }
}
