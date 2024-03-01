import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService{
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  ingredients: Ingredient[]=[
      new Ingredient('Apples',5),
      new Ingredient('Tomatoes',10)
    ]
  
    getIngredients(){
      return this.ingredients.slice();
    }
    onIngredientAdded(ingredientData: Ingredient){
      this.ingredients.push(ingredientData);
      this.ingredientsChanged.emit(this.ingredients.slice());
    } 
}