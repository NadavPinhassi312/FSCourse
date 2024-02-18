import { Component, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent {
  @ViewChild('ingredientNameInput', {static:true}) ingredientNameInput: ElementRef;
  @ViewChild('ingredientAmountInput', {static:true}) ingredientAmountInput: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  onAddPressed(){
    const name = this.ingredientNameInput.nativeElement.value;
    const amount = this.ingredientAmountInput.nativeElement.value;
    const ingredient = new Ingredient(name, amount);
    this.ingredientAdded.emit(ingredient)
  }
  
  onDeletePressed(){

  }
  onClearPressed(){

  }
  
}
