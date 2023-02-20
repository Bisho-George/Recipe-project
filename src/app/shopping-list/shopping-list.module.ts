import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoggingService } from '../logging.service';
import { SharedModule } from '../shared/shared.module';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { ShoppingListRoutingModule } from './shopping-list-routing.module';
import { ShoppingListComponent } from './shopping-list.component';

@NgModule({
  declarations: [ShoppingEditComponent, ShoppingListComponent],
  imports: [FormsModule, ShoppingListRoutingModule, SharedModule],
})
export class ShoppingListModule {}
