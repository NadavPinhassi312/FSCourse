import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DataStorageService } from '../shared/data-storage.service';

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



  // navRecipesClicked(){
  //   console.log("recipes clicked")
  //   this.navUpdated.emit('Recipes');
  // }
  // navShoppingListClicked(){
  //   console.log("shopping list clicked")
  //   this.navUpdated.emit('Shopping List');
  // }
}
