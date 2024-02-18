import { Component, EventEmitter, Output } from '@angular/core';

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
  navRecipesClicked(){
    console.log("recipes clicked")
    this.navUpdated.emit('Recipes');
  }
  navShoppingListClicked(){
    console.log("shopping list clicked")
    this.navUpdated.emit('Shopping List');
  }
}
