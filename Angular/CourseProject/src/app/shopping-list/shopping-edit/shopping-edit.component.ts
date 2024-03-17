import { Component, ElementRef, ViewChild } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent {
  @ViewChild('form') ingForm:NgForm;

  constructor(private shoppingListService: ShoppingListService){}

  onAddPressed(form:NgForm){
    const value = form.value
    const newIngredient = new Ingredient(value.name, value.amount)
    this.shoppingListService.onIngredientAdded(newIngredient);
  }
  
  onDeletePressed(){

  }
  onClearPressed(){

  }
  
}
