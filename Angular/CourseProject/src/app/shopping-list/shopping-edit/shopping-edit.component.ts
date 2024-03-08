import { Component, ElementRef, ViewChild } from '@angular/core';
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
    this.shoppingListService.onIngredientAdded({name, amount});
  }
  
  onDeletePressed(){

  }
  onClearPressed(){

  }
  
}
