import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService{
  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();
  ingredients: Ingredient[]=[
    new Ingredient("Tomato", 1),
    new Ingredient("Potato", 2)
  ]
  
    getIngredients(){
      return this.ingredients.slice();
    }

    getIngredient(index:number) {
      return this.ingredients[index]
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

    updateIngredient(index: number, newIngredient: Ingredient) {
      this.ingredients[index] = newIngredient
      this.ingredientsChanged.next(this.ingredients.slice());
    }

    deleteIngredient(index: number) {
      this.ingredients.splice(index,1);
      this.ingredientsChanged.next(this.ingredients.slice());
    }
}