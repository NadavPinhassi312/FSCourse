import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DataStorageService } from '../shared/data-storage.service';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private router: Router, private dataStorageService: DataStorageService){}

  onSaveData() {
    this.dataStorageService.storeRecipes();
  }

  onFetchData() {
    this.dataStorageService.fetchRecipes();
  }



  // navRecipesClicked(){
  //   console.log("recipes clicked")
  //   this.navUpdated.emit('Recipes');
  // }
  // navShoppingListClicked(){
  //   console.log("shopping list clicked")
  //   this.navUpdated.emit('Shopping List');
  // }
}
