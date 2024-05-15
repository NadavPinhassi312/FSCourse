import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DataStorageService } from '../shared/data-storage.service';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from '../Auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent implements OnInit, OnDestroy {
  isAuthenticated: boolean = false;
  private userSub: Subscription

  constructor(private router: Router, private dataStorageService: DataStorageService, private authService: AuthService) { }

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user // = !user ? false : true 
    });
    if (this.isAuthenticated){
      this.dataStorageService.fetchRecipes().subscribe();
    }
  }

  onSaveData() {
    this.dataStorageService.storeRecipes();
  }

  onFetchData() {
    this.dataStorageService.fetchRecipes().subscribe();
  }

  onLogout() {
    this.authService.logout();
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }

}
