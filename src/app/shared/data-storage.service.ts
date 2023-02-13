import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, tap } from "rxjs/operators";
import { Recipe } from "../recipes/recipe.model";
import { RecipeService } from "../recipes/recipe.service";

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
   constructor(private http: HttpClient, private recipesService: RecipeService) {}
   storeRecipes () {
    const recipes = this.recipesService.getRecipes();
    this.http.put(
      'https://recipe-book-1ca7e-default-rtdb.firebaseio.com/recipes.json',
      recipes
    )
    .subscribe(response => {
      console.log(response);

    });
   }

   fetchRecipes () {
    return this.http.get<Recipe[]> (
      'https://recipe-book-1ca7e-default-rtdb.firebaseio.com/recipes.json'
      ).pipe (map(recipes => {
        return recipes.map(recipe => {
          return {
            ...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []
          }
        })
      }),
      tap (recipes => {
        this.recipesService.setRecipes(recipes);
      })
    )
   }
}
