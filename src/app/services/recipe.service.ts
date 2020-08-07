import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {environment} from 'src/environments/environment';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipeSubject = new Subject<any[]>();
  recipes: any[] = [];
  constructor(
    private httpClient: HttpClient
  ) { }


  emitRecipeSubject(){
    this.recipeSubject.next(this.recipes.slice());
  }

  getAllRecipes() {
    this.httpClient.get(environment.apiUrl+"recipes").subscribe(
      (recipes: any) => {
        this.recipes = recipes;
        this.emitRecipeSubject();
        console.log(recipes);
      },
      (error) => {
        console.log(error);
      }
    )
  }
}
