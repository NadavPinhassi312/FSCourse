import { Component } from '@angular/core';
import { FormArray, FormControl, FormControlName, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { RecipeItemComponent } from '../recipe-list/recipe-item/recipe-item.component';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css'] // Change styleUrl to styleUrls
})

export class RecipeEditComponent {
  id: number
  editMode=false;
  recipeForm: FormGroup;

  constructor(private route: ActivatedRoute, private router:Router, private recipeService: RecipeService){}

  ngOnInit(){
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode=params['id'] != null;

        this.initForm();
      }
    )
  }

  onSubmit(){
    console.log(this.recipeForm)
  }

  private initForm() {
    console.log(this.id)
    let recipeName='';
    let recipeImagePath='';
    let recipeDescription='';
    let recipeIngredients = new FormArray([]);
    
    if (this.editMode) {
      const recipe = this.recipeService.getRecipeByID(this.id)
      recipeName=recipe.name;
      recipeImagePath=recipe.imagePath;
      recipeDescription=recipe.description;
      if (recipe['ingredients']) {
        for (let ingredient of recipe.ingredients) {
          recipeIngredients.push(
            new FormGroup ({
              'name': new FormControl(ingredient.name),
              'amount': new FormControl(ingredient.amount)
            })
          )
        }
      }
    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName),
      'imagePath': new FormControl(recipeImagePath),
      'description': new FormControl(recipeDescription),
      'ingredients': recipeIngredients
    });
  }

  get controls() { // a getter!
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }



  onCancel() {
    this.router.navigate(['/recipes', this.id])
  }

}
