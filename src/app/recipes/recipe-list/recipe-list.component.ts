import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];
  filteredRecipes: Recipe[];

  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
    this.filteredRecipes = this.recipes;
  }

  onNewRecipe() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  filter(data: string) {
    if (data) {
      this.filteredRecipes = this.recipes.filter((recipe: Recipe) => {
        return recipe.name.toLowerCase().indexOf(data.toLowerCase()) > -1;
      });
    } else {
      this.filteredRecipes = this.recipes;
    }
  }
}
