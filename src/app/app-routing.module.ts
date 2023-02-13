import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { RecipeResolverService } from "./recipes-resolver.service";
import { RecipeDetailsComponent } from "./recipes/recipe-details/recipe-details.component";
import { RecipeEditComponent } from "./recipes/recipe-edit/recipe-edit.component";
import { RecipeItemComponent } from "./recipes/recipe-list/recipe-item/recipe-item.component";
import { RecipeStartComponent } from "./recipes/recipe-start/recipe-start.component";
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
const appRoutes: Routes = [
    { path: '', redirectTo: 'recipes', pathMatch: 'full' },
    {
        path: 'recipes', component: RecipesComponent, children: [
            {
                path: '',
                component: RecipeStartComponent
            },
            {
                path: 'new',
                component: RecipeEditComponent
            },
            {
                path: ':id',
                component: RecipeDetailsComponent,
                resolve: [RecipeResolverService]
            },
            {
                path: ':id/edit',
                component: RecipeEditComponent,
                resolve: [RecipeResolverService]
            }
        ]
    },
    { path: 'shopping-list', component: ShoppingListComponent }
]
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}
