import { Component } from '@angular/core';
import { FormArray, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';

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

  private initForm() {
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
              'name': new FormControl(ingredient.name, Validators.required),
              'amount': new FormControl(ingredient.amount, [
                Validators.required, 
                Validators.pattern('^[1-9]+[0-9]*$')
              ])
            })
          )
        }
      }
    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName, Validators.required),
      'imagePath': new FormControl(recipeImagePath, Validators.required),
      'description': new FormControl(recipeDescription, Validators.required),
      'ingredients': recipeIngredients
    });
  }


  onSubmit(){
    const newRecipe = new Recipe(
      this.recipeForm.value['name'],
      this.recipeForm.value['description'],
      this.recipeForm.value['imagePath'],
      this.recipeForm.value['ingredients'])
    if (this.editMode) {
      this.recipeService.updateRecipe(this.id, newRecipe)
      this.router.navigate(['/recipes', this.id])
    }
    else {
      this.recipeService.addRecipe(newRecipe)
    }
  }
  
  onCancel() {
    if(this.editMode) {
      this.router.navigate(['/recipes', this.id])
    }
    else {
      this.router.navigate([''])
    }
  }
  
  get controls() { // a getter!
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }

  onAddIngredient() {
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'amount': new FormControl(null, [
          Validators.required, 
          Validators.pattern('^[1-9]+[0-9]*$')
        ])
      })
    )
  }

  onDeleteIngredient(index: number) {
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }




}
