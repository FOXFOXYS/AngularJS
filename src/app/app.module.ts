import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListRecipeComponent } from './page/list-recipe/list-recipe.component';
import { ListRecipeModule } from './page/list-recipe/list-recipe.module';
import { RecipeComponent } from './components/recipe/recipe.component';
import { HomeComponent } from './page/home/home.component';
import { HomeModule } from './page/home/home.module';
import { PageNotFoundComponent } from './page/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    ListRecipeComponent,
    RecipeComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ListRecipeModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
