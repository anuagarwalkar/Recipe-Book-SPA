import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.modal';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit{
  @Input() recipe:Recipe
  @Output() recipeDetail = new EventEmitter<void>()

  
  emitRecipe(){
    this.recipeDetail.emit();
    console.log('working from item')
  }



  ngOnInit(){
  }

}
