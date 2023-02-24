import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';
import { AuthService } from 'src/app/auth/auth.service';
import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css'],
})
export class RecipeDetailsComponent implements OnInit {
  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {}
  private subscription: Subscription;
  recipe: Recipe;
  id: number;
  deleteError: string = '';
  ngOnInit(): void {
    const id = this.route.params.subscribe((params: Params) => {
      this.id = Number(params['id']);
      this.recipe = this.recipeService.getRecipeById(this.id);
    });
  }
  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
  onEditRecipe() {
    this.router.navigate(['edit'], { relativeTo: this.route });
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route})
  }
  onDeleteRecipe() {
    this.subscription = this.authService.user.subscribe(
      userData => {
        if (userData.email === null) {
          return;
        }
        if (userData.email === 'bishogeorge689@gmail.com') {
          this.recipeService.deleteRecipe(this.id);
          this.router.navigate(['../']);
        }
        else {
          this.deleteError = 'you cannot delete the recipe please call the support';
        }
      }
    )
  }

}
