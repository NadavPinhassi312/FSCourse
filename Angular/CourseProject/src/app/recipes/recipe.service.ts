import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { Subject } from "rxjs";

export class RecipeService{
    recipesChanged = new Subject<Recipe[]>();

    // private recipes:Recipe[]=[
    //     new Recipe(
    //       'Cherry Tomato Pasta',
    //       'Great Dish!',
    //       'https://www.cookipedia.co.uk/wiki/images/3/3d/Ready_steady_pasta_recipe_recipe.jpg',
    //       [
    //         new Ingredient('Pasta', 1),
    //         new Ingredient('Cherry Tomatoes', 15),
    //         new Ingredient('Broccoli', 3),
    //         new Ingredient('Rose sauce', 1)
    //       ]),
    //     new Recipe(
    //       'American Burger',
    //       'Solves almost any problem.',
    //       'https://www.foodandwine.com/thmb/DI29Houjc_ccAtFKly0BbVsusHc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b.jpg',
    //       [
    //         new Ingredient('Buns', 2),
    //         new Ingredient('Meat', 1),
    //         new Ingredient('Veggies', 5),
    //       ])
    //   ];

    private recipes: Recipe[] = [];

      getRecipes(){
        return this.recipes.slice();
      }

      getIDByName(name: String){
        for (let i=0; i<this.recipes.length; i++ ){
          if (this.recipes[i].name==name){
            return i
          }
        }
        return null;
      }
      getRecipeByID(id: number){
        return this.recipes[id];
      }

      addRecipe(recipe: Recipe) {
        this.recipes.push(recipe)
        this.recipesChanged.next(this.recipes.slice());
      }
      
      updateRecipe(index: number, recipe: Recipe) {
        this.recipes[index]=recipe;
        this.recipesChanged.next(this.recipes.slice());
      }
      
      deleteRecipe(index: number) {
        this.recipes.splice(index,1);
        this.recipesChanged.next(this.recipes.slice());
      }
      
      replaceRecipeList(recipeList: Recipe[]) {
        this.recipes=recipeList;
        this.recipesChanged.next(this.recipes.slice());
      }




  }