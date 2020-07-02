import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss']
})
export class ColumnComponent implements OnInit {

  private nomColumn: String;
  private listCard : CardComponent[];

  constructor( nomC:String) {
 
    this.nomColumn=nomC;
   }


   cardToColumn(newCard:CardComponent) {
     this.listCard.push(newCard);
   }

   getNomColumn() {
    return  this.nomColumn;
  }

  ngOnInit(): void {
  }

  

}
