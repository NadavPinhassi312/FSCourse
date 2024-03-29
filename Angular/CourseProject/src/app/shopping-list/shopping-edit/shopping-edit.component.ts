import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Ingredient } from '../../shared/ingredient.model';
import { Subscription } from 'rxjs';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent implements OnInit, OnDestroy{
  @ViewChild('f', {static:false}) slForm: NgForm
  subscription: Subscription;
  editMode=false;
  editedItemIndex:number;
  editedItem: Ingredient;

  constructor(private shoppingListService: ShoppingListService){}
  @ViewChild('i', {static:false}) index: number;
  ngOnInit(): void {
    
    this.shoppingListService.startedEditing.subscribe(
      (index:number)=>{
        this.editedItemIndex=index;
        this.editMode=true;
        this.editedItem=this.shoppingListService.getIngredient(index)
        this.slForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        })
      }

    );
  }

  ngOnDestroy(): void {
    
  }

  onSubmit(form:NgForm){
    const value = form.value
    const newIngredient = new Ingredient(value.name, value.amount)
    if (this.editMode) {
      this.shoppingListService.updateIngredient(this.editedItemIndex, newIngredient)
      this.editMode=false
    }
    else {
      this.shoppingListService.onIngredientAdded(newIngredient);
    }
    this.slForm.reset();
  }
  
  onDelete(){
    this.shoppingListService.deleteIngredient(this.editedItemIndex)
    this.onClear();
  }
  onClear(){
    this.slForm.reset()
    this.editMode=false

  }
  
}
