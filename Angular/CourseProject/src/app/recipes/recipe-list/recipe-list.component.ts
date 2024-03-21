import { Component, OnDestroy, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit, OnDestroy{
  recipes:Recipe[]=[]
  subscription: Subscription;
  constructor(private recipeService: RecipeService, private router:Router, private route: ActivatedRoute){}

  ngOnInit(){
    this.recipes = this.recipeService.getRecipes();
    this.subscription = this.recipeService.recipesChanged.subscribe(
      (recipes:Recipe[]) => {
        this.recipes = recipes;
      }
    )
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onNewRecipe(){
    this.router.navigate(['new-recipe'], {relativeTo: this.route});
  }

  onLoadRecipe(recipe: Recipe){
    // const id: number = this.recipeService.getIDByName(recipe.name);
    // console.log(id)
    // this.router.navigate(['/recipes', id]);
  }
  
}
