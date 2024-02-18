import { Component } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css'
})
export class RecipesComponent {
recipeDisplayed: Recipe;

recipeClicked(recipe: Recipe){
  console.log("recipe component: ", recipe)
  this.recipeDisplayed=recipe;
}
}
