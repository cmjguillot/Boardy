import { Injectable } from '@angular/core';
import { CardComponent } from './card/card.component';

@Injectable({
  providedIn: 'root'
})
export class CardToTabService {
  private cardList :CardComponent [];

  constructor() { }

  addToTab(newCard:CardComponent) {

  this.cardList.put(newCard);


  }

  
}
