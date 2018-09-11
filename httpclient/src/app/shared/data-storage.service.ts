import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import 'rxjs/Rx';

import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class DataStorageService {
  constructor(private httpClient: HttpClient,
              private recipeService: RecipeService,
              private authService: AuthService) {
  }

  storeRecipes() {
    //const headers = new HttpHeaders().set('Authorization', 'Bearer asdkaghlkajd');

    //return this.httpClient.put('https://ng-recipe-book-ec4c6.firebaseio.com/recipes.json', this.recipeService.getRecipes(), {
    //  //observe: 'events'
    //  observe: 'body',
    //  params: new HttpParams().set('auth', token)
    //  //headers: headers
    //});

    const req = new HttpRequest('PUT',
      'https://ng-recipe-book-ec4c6.firebaseio.com/recipes.json',
      this.recipeService.getRecipes(),
      {
        reportProgress: true
      })

    return this.httpClient.request(req)
  }

  getRecipes() {

    // If we are not receiving JSON data, we can define options for the request in the second parameter of get
    this.httpClient.get<Recipe[]>('https://ng-recipe-book-ec4c6.firebaseio.com/recipes.json', {
      observe: 'body',
      responseType: 'json'
    })
    //this.httpClient.get<Recipe[]>('https://ng-recipe-book-ec4c6.firebaseio.com/recipes.json?auth=' + token)
      .map(
        (recipes) => {
          console.log(recipes);
          for (let recipe of recipes) {
            if (!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }
          return recipes;
        }
      )
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipeService.setRecipes(recipes);
        }
      );
  }
}
