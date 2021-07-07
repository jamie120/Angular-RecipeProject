import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is a test desc',
      'https://images.unsplash.com/photo-1545576300-c7744d48aead?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
      [new Ingredient('Meat', 1), new Ingredient('Fries', 10)]
    ),
    new Recipe(
      'A Second Test Recipe',
      'This is the second test desc',
      'https://images.unsplash.com/photo-1545576300-c7744d48aead?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
      [new Ingredient('Cheese', 1), new Ingredient('Break', 3)]
    ),
    new Recipe(
      'A Third Test Recipe',
      'This is the second test desc',
      'https://images.unsplash.com/photo-1545576300-c7744d48aead?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
      []
    ),
    new Recipe(
      'A Fourth Test Recipe',
      'This is the second test desc',
      'https://images.unsplash.com/photo-1545576300-c7744d48aead?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
      []
    ),
    new Recipe(
      'A Fifth Test Recipe',
      'This is the second test desc',
      'https://images.unsplash.com/photo-1545576300-c7744d48aead?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
      []
    ),
    new Recipe(
      'A Sixth Test Recipe',
      'This is the second test desc',
      'https://images.unsplash.com/photo-1545576300-c7744d48aead?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
      []
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }
}
