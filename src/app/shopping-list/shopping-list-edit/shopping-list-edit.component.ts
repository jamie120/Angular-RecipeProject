import { Component } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
    selector: 'app-shopping-list-edit',
    templateUrl: './shopping-list-edit.component.html',
})

export class ShoppingListEditComponent {
   
    constructor(private shoppingListService: ShoppingListService ) {};

    addIngredient(ingname, amount){
        const ingredientEl = new Ingredient(ingname, amount);
        this.shoppingListService.addIngredient(ingredientEl);
    }
}