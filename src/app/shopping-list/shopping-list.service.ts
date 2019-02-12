import { Injectable, EventEmitter } from '@angular/core';
import {Ingredient} from '../shared/ingredient.modal'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  constructor(private router:Router) { }
  ingredientChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = []
  // = [new Ingredient('Apples',50),
  // new Ingredient('Tomatoes',10)];

  getIngredients(){
    return this.ingredients.slice();
  }
  
  addIngredinet(ingredient:Ingredient){
    this.ingredients.push(ingredient)
    this.ingredientChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredients:Ingredient[]){
      this.ingredients.push(...ingredients);
      this.ingredientChanged.emit(this.ingredients.slice())
      this.router.navigate(['/shoppingList'])
  }
}
