import { Component, OnInit, OnDestroy } from '@angular/core';
import { RecipeService} from 'src/app/services/recipe.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-recipe',
  templateUrl: './list-recipe.component.html',
  styleUrls: ['./list-recipe.component.scss']
})
export class ListRecipeComponent implements OnInit, OnDestroy {

  recipes: any[];
  recipeSubscription: Subscription;
  allowed: boolean = false;
  currentCar: string;
  cars: string[] = [
    "coucou",
    "hello",
    "lol"
  ];

  constructor(
    private recipeService: RecipeService
  ) { }

  ngOnInit(): void {
    this.currentCar = "Renault";

    setTimeout(() => {
      this.allowed = true
    }, 3000);

    this.recipeSubscription = this.recipeService.recipeSubject.subscribe(
      (recipes: any[]) => {
        this.recipes = recipes;
        console.log("Subscriptions");
        console.log(this.recipes);
      }
    );
    this.recipeService.getAllRecipes();
  }

  activate(id: number) {
    alert(id);
  }

  getRecipes() {
    this.recipeService.getAllRecipes();
  }

  ngOnDestroy() {

  }
}
 