import { Injectable, EventEmitter } from '@angular/core';

import {Recipe} from './recipe.modal'
import { Ingredient } from '../shared/ingredient.modal';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  recipes:Recipe[] = [
    new Recipe('Cilantro Lime Grilled',
    'This Grilled Salmon from Delish.com',
    'https://hips.hearstapps.com/del.h-cdn.co/assets/18/11/2048x1024/landscape-1520957481-grilled-salmon-horizontal.jpg?resize=1200:*',
    [new Ingredient('Cilantro', 300), new Ingredient('Salmon',600)]),
    new Recipe('Veggie Enchiladas', 
    'with DIY Enchilada Sauce',
    'https://res.cloudinary.com/hellofresh/image/upload/f_auto,fl_lossy,q_auto/v1/hellofresh_s3/image/enchiladas-aux-legumes-1a1102aa.jpg'
    ,[new Ingredient('Eggs', 50), new Ingredient('Cheese',200)]),
    new Recipe('Thai Massaman',
    'with Basmati Rice,',
    'https://res.cloudinary.com/hellofresh/image/upload/f_auto,fl_lossy,q_auto/v1/hellofresh_s3/image/thai-massaman-veggie-skewers-a7512fa0.jpg'
    ,[new Ingredient('Meat', 20), new Ingredient('Curry',100)])
  ];

  getRecipes(){
    return this.recipes.slice();
  }

  constructor() { }
}
