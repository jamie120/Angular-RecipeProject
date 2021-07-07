import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredientsFromRecipe(ingredientsList: Ingredient[]) {
    // for (let ingredient of ingredientsList) {
    //     this.addIngredient(ingredient);
    // }
    this.ingredients.push(...ingredientsList);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
