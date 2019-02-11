import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.modal';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes:Recipe[] = [
    new Recipe('Cilantro Lime Grilled',
    'This Grilled Salmon from Delish.com',
    'https://hips.hearstapps.com/del.h-cdn.co/assets/18/11/2048x1024/landscape-1520957481-grilled-salmon-horizontal.jpg?resize=1200:*'),
    new Recipe('Veggie Enchiladas', 
    'with DIY Enchilada Sauce',
    'https://res.cloudinary.com/hellofresh/image/upload/f_auto,fl_lossy,q_auto/v1/hellofresh_s3/image/enchiladas-aux-legumes-1a1102aa.jpg'),
    new Recipe('Thai Massaman',
    'with Basmati Rice,',
    'https://res.cloudinary.com/hellofresh/image/upload/f_auto,fl_lossy,q_auto/v1/hellofresh_s3/image/thai-massaman-veggie-skewers-a7512fa0.jpg')
  ];

  showRecipe(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);

  }
  constructor() { }

  ngOnInit() {
  }

}
