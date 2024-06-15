import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css',
  providers: []
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private subscription: Subscription;

  constructor(private shoppingListService: ShoppingListService, private loggingService: LoggingService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients(); // When a page is loaded

    this.subscription = this.shoppingListService.ingredientsChanged.subscribe( // When an ingredient is added 
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    )

    this.loggingService.printLog("Hello from ShoppingListComponent's ngOnInit")

  }

  onEditItem(index: number) {
    this.shoppingListService.startedEditing.next(index)
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
