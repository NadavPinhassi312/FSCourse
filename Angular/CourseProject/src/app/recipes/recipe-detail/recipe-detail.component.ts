import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent {
  recipe: Recipe
  id: number;
  paramsSubscription:Subscription;

  constructor(private shoppingListService: ShoppingListService, 
              private recipeService: RecipeService, 
              private route: ActivatedRoute,
              private router: Router){}
  ngOnInit(){
    // this.id=this.route.snapshot.params['id'];

    this.paramsSubscription=this.route.params
    .subscribe((params: Params) => {
        this.id=params['id']
        this.recipe=this.recipeService.getRecipeByID(this.id);
            }
    )
    
    
  }
  editRecipe() {
    this.router.navigate(['/recipes', this.id, 'edit']);
  }

  toShoppingList(){
    this.shoppingListService.addToList(this.recipe.ingredients);
  }
}
