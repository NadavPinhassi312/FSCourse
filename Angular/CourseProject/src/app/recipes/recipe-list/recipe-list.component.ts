import { Component, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  recipes:Recipe[]=[
    new Recipe('A Test Recipe', 'This is simply a test', 'https://www.cookipedia.co.uk/wiki/images/3/3d/Ready_steady_pasta_recipe_recipe.jpg'),
    new Recipe('A Test Recipe 2', 'This is simply a test 2', 'https://www.cookipedia.co.uk/wiki/images/3/3d/Ready_steady_pasta_recipe_recipe.jpg'),
    new Recipe('A Test Recipe 3', 'This is simply a test 3', 'https://www.cookipedia.co.uk/wiki/images/3/3d/Ready_steady_pasta_recipe_recipe.jpg'),
  ];
  
  @Output() recipeClicked = new EventEmitter<Recipe>();
  
  onRecipeClicked(currentRecipe: Recipe){
    this.recipeClicked.emit(currentRecipe);
  }
}
