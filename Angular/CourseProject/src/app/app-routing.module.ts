import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { NewRecipeComponent } from "./recipes/new-recipe/new-recipe.component";

const appRoutes: Routes = [
    {path: '', redirectTo: '/recipes', pathMatch: 'full'},
    {path: 'recipes', component: RecipesComponent, children: [
      {path: ':id', component: RecipeDetailComponent},
      {path: ':new-recipe', component: NewRecipeComponent}
    ]},
    {path: 'shopping-list', component: ShoppingListComponent}
  ]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule{

}

// const appRoutes: Routes = [
//   { path: '', component: HomeComponent },
//   { path: 'users', component: UsersComponent, children: [
//     { path: ':id/:name', component: UserComponent }
//   ] },
//   {
//     path: 'servers',
//     // canActivate: [AuthGuard],
//     canActivateChild: [AuthGuard],
//     component: ServersComponent,
//     children: [
//     { path: ':id', component: ServerComponent, resolve: {server: ServerResolver} },
//     { path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuard] }
//   ] },
//   // { path: 'not-found', component: PageNotFoundComponent },
//   { path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found!'} },
//   { path: '**', redirectTo: '/not-found' }
// ];