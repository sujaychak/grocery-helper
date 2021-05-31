import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Grocery } from '../data/grocery';

@Component({
  selector: 'shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  constructor(){}
  groceryList = new BehaviorSubject<Grocery[]>([]);
  ngOnInit(){

  }
  get allItems(): Observable<Grocery[]> {return   this.groceryList.asObservable()};
}