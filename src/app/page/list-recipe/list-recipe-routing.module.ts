import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Import
import {ViewRecipeComponent} from '../view-recipe/view-recipe.component';
import {ListRecipeComponent} from './list-recipe.component';
import {CreateRecipeComponent} from '../create-recipe/create-recipe.component';

const routes: Routes = [
  { path: '', component: ListRecipeComponent},
  { path: ':id', component: ViewRecipeComponent, pathMatch: 'full'},
  { path: 'new', component: CreateRecipeComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListRecipeRoutingModule { }
