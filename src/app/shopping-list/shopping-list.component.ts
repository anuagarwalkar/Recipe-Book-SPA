import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.modal';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] 

  // onIngredinetAdded(ingredient:Ingredient){
  //   this.shoppingservice.ingredients.push(ingredient);
    
  // }

  constructor(private shoppingservice:ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingservice.getIngredients();
    this.shoppingservice.ingredientChanged.subscribe((ingredients:Ingredient[])=>{
      this.ingredients = ingredients
    });
  }

}
