import { Component, Input, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Recipe } from '../recipe.model';

@Component({
    selector: 'app-recipe-detail',
    templateUrl: './recipe-detail.component.html',
})

export class RecipeDetailComponent {
   @Input() recipe: Recipe;

   constructor(private shoppingListService: ShoppingListService) {}

   addIngredients(ingredients: Ingredient[]){
      this.shoppingListService.addIngredientsFromRecipe(ingredients);
   }
}