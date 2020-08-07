import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Import des Components 
import {HomeComponent} from './page/home/home.component';
import {PageNotFoundComponent} from './page/page-not-found/page-not-found.component';
 
// Routes pour les Components
const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'recipes', loadChildren: () => import('./page/list-recipe/list-recipe.module')
  .then(mod => mod.ListRecipeModule)
  },
  { path: 'not-found', component: PageNotFoundComponent, pathMatch: 'full', },
  { path: '**', redirectTo: 'not-found' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
