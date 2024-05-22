import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../Auth/auth.guard";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipesResolverService } from "./recipes-resolver.service";
import { RecipesStartComponent } from "./recipes-start/recipes-start.component";
import { RecipesComponent } from "./recipes.component";

const routes: Routes = [
    {
        path: 'recipes', component: RecipesComponent, canActivate: [AuthGuard], children: [
            { path: '', component: RecipesStartComponent },
            { path: 'new-recipe', component: RecipeEditComponent },
            { path: ':id/edit', component: RecipeEditComponent, resolve: [RecipesResolverService] },
            { path: ':id', component: RecipeDetailComponent, resolve: [RecipesResolverService] },
            { path: '**', redirectTo: '/recipes' }
        ]
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class RecipesRoutingModule { }