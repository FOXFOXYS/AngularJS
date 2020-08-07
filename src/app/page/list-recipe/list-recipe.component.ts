import { Component, OnInit } from '@angular/core';
import { RecipeService} from 'src/app/services/recipe.service';

@Component({
  selector: 'app-list-recipe',
  templateUrl: './list-recipe.component.html',
  styleUrls: ['./list-recipe.component.scss']
})
export class ListRecipeComponent implements OnInit {

  allowed: boolean = false;
  currentCar: string;
  // cars: string[] = {
  //   "coucou"
  // };

  constructor(
    private recipeService: RecipeService
  ) { }

  ngOnInit(): void {
    this.currentCar = "Renault";

    setTimeout(() => {
      this.allowed = true
    }, 3000);
  }

  activate(id: number) {
    alert(id);
  }

  getRecipes() {
    this.recipeService.getAllRecipes();
  }

}
