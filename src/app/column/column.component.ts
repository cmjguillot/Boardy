import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss']
})
export class ColumnComponent implements OnInit {

  private nomColumn: String;

  constructor( nomC:String) {
 
    this.nomColumn=nomC;
   }

  ngOnInit(): void {
  }

}
