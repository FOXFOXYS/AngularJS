import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipe: any[] = [];
  constructor(
    private httpClient: HttpClient
  ) { }

  getAllRecipes() {
    this.httpClient.get(environment.apiUrl+"recipes").subscribe(
      (recipes) => {
        console.log(recipes);
      },
      (error) => {
        console.log(error);
      }
    )
  }
}
