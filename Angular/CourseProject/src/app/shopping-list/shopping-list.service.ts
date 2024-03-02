import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService{
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  ingredients: Ingredient[]=[]
  
    getIngredients(){
      return this.ingredients.slice();
    }
    onIngredientAdded(ingredientData: Ingredient){
      this.ingredients.push(ingredientData);
      this.ingredientsChanged.emit(this.ingredients.slice());
    } 

    addToList(ingredients: Ingredient[]){
      for (let i = 0; i < ingredients.length; i++) {
        // console.log (ingredients[i].name, ingredients[i].amount);
        this.ingredients.push(ingredients[i])
      }


    }
}