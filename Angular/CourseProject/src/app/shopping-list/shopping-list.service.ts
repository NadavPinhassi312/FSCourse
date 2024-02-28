import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService{
    ingredients: Ingredient[]=[
        new Ingredient('Apples',5),
        new Ingredient('Tomatoes',10)
      ]
    
      onIngredientAdded(ingredientData: Ingredient){
        this.ingredients.push(ingredientData)
      } 
      getIngredients(){
        return this.ingredients;
      }
}