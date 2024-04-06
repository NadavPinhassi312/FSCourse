import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { RecipesStartComponent } from "./recipes/recipes-start/recipes-start.component";
import { RecipeEditComponent } from "./recipes/recipe-edit/recipe-edit.component";
import { RecipesResolverService } from "./recipes/recipes-resolver.service";

const appRoutes: Routes = [
    {path: '', redirectTo: '/recipes', pathMatch: 'full'},
    {path: 'recipes', component: RecipesComponent, children: [
      {path: '', component: RecipesStartComponent},
      {path: 'new-recipe', component: RecipeEditComponent},
      {path: ':id/edit', component: RecipeEditComponent, resolve: [RecipesResolverService]},
      {path: ':id', component: RecipeDetailComponent, resolve: [RecipesResolverService]}
    ]},
    {path: 'shopping-list', component: ShoppingListComponent},
    {path: '**', redirectTo: '/recipes'}
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