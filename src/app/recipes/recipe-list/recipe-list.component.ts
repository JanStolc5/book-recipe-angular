import { Component, OnInit } from '@angular/core';
import { Receipe } from './receipe.model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recepies: Receipe[] = [
  new Receipe('test', 'this is the test recepies', 'https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_960_720.jpg'),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
