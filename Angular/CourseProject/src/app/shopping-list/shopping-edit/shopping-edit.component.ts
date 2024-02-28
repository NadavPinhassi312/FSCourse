import { Component, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent {
  @ViewChild('ingredientNameInput', {static:true}) ingredientNameInput: ElementRef;
  @ViewChild('ingredientAmountInput', {static:true}) ingredientAmountInput: ElementRef;

  constructor(private shoppingListService: ShoppingListService){}

  onAddPressed(){
    const name = this.ingredientNameInput.nativeElement.value;
    const amount = this.ingredientAmountInput.nativeElement.value;
    const ingredient = new Ingredient(name, amount);
    this.shoppingListService.onIngredientAdded(ingredient);
  }
  
  onDeletePressed(){

  }
  onClearPressed(){

  }
  
}
