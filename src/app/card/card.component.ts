import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  
  private lastname: String;
  private firstname: String;



  constructor(ln:String, fn:String ) {
    this.lastname = ln;
    this.firstname = fn;


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
