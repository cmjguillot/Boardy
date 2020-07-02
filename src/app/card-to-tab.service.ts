import { Injectable } from '@angular/core';
import { CardComponent } from './card/card.component';
import { ColumnComponent } from './column/column.component';

@Injectable({
  providedIn: 'root'
})
export class CardToTabService {
  private cardList :CardComponent [];
  private columnList :ColumnComponent [];

  constructor() { }

  addToCardList(newCard:CardComponent) {

  this.cardList.push(newCard);


  }

  addToColumnList(newColumn:ColumnComponent) {
    this.columnList.push(newColumn);
  }

  getColumnList() {
    return this.columnList;
  }

  
}
