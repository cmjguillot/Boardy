import { Component, OnInit } from '@angular/core';
import { ColumnComponent } from '../column/column.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {


  private column :ColumnComponent;
  private lastname: String;
  private firstname: String;



  constructor(ln:String, fn:String, col:ColumnComponent ) {
    this.lastname = ln;
    this.firstname = fn;
    this.column=col;


   }

   getLastName() {
     return this.lastname;
   }
   getFirstName() {
    return this.firstname;
  }

  ngOnInit(): void {

  }

}
