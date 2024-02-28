import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();
    
    private recipes:Recipe[]=[
        new Recipe('A Test Recipe', 'This is simply a test', 'https://www.cookipedia.co.uk/wiki/images/3/3d/Ready_steady_pasta_recipe_recipe.jpg'),
        new Recipe('A Test Recipe 2', 'This is simply a test 2', 'https://www.cookipedia.co.uk/wiki/images/3/3d/Ready_steady_pasta_recipe_recipe.jpg'),
        new Recipe('A Test Recipe 3', 'This is simply a test 3', 'https://www.cookipedia.co.uk/wiki/images/3/3d/Ready_steady_pasta_recipe_recipe.jpg'),
      ];

      getRecipes(){
        return this.recipes.slice();
      }
}