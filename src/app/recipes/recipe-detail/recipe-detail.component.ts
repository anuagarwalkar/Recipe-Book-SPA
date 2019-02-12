import { Component,Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.modal';
import { RecipeService } from '../recipe.service';
import { Ingredient } from 'src/app/shared/ingredient.modal';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit{
@Input() recipe: Recipe

constructor(private recipeService: RecipeService){}

// constructor(private recipeservice: RecipeService){

// }

addItemsToShoppingList(){
 this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients)
}

ngOnInit(){


}


}
