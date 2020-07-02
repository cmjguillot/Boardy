import { Injectable } from '@angular/core';
import { CardComponent } from './card/card.component';
import { ColumnComponent } from './column/column.component';
import {  Card } from './@shared/model/card';
import {  Column } from './@shared/model/column';

@Injectable({
  providedIn: 'root'
})
export class CardToTabService {

  private cardList: Card[];
  private columnList: Column[];

  constructor() { 
    this.cardList = [];
    this.columnList = [];
  }

  addToCardList(nom: string, prenom: string) {
    this.cardList.push({ nom: nom, prenom: prenom });
  }

  addToColumnList(title: string) {
    this.columnList.push({ title: title });
  }

  getColumnList() {
    return this.columnList;
  }

  
}
