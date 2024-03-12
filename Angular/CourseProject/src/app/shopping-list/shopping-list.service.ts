import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService{
  ingredientsChanged = new Subject<Ingredient[]>();
  ingredients: Ingredient[]=[]
  
    getIngredients(){
      return this.ingredients.slice();
    }
    onIngredientAdded(ingredientData: Ingredient){
      this.ingredients.push(ingredientData);
      this.ingredientsChanged.next(this.ingredients.slice());
    } 

    addToList(ingredients: Ingredient[]){
      // for (let i = 0; i < ingredients.length; i++) {
      //   // console.log (ingredients[i].name, ingredients[i].amount);
      //   this.ingredients.push(ingredients[i])
      // }
      this.ingredients.push(...ingredients);


    }
}