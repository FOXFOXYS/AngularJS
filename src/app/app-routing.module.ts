import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Import des Components 
import {ListRecipeComponent } from './page/list-recipe/list-recipe.component';
import {HomeComponent} from './page/home/home.component';
 
// Routes pour les Components
const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'recipes', component: ListRecipeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
