import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Output() navUpdated = new EventEmitter<string>();
  
  navClicked(feature: string){
    this.navUpdated.emit(feature)
    
  }
  constructor(private router: Router){}

  navToRecipe(){
    this.router.navigate(['recipes'])
    console.log("nav to recipes");
  }
  
  navToShoppingList(){
    this.router.navigate(['shopping-list'])
    console.log("nav to shopping list");
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
