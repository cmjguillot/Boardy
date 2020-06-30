import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CardComponent } from '../card/card.component';
import { CardToTabService } from 'src/app/card-to-tab.service';


@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.scss']
})
export class AddCardComponent implements OnInit {

  addCardForm : FormGroup;
 
  

  constructor(private CardToTabService: CardToTabService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.addCardForm = this.fb.group({  

      lastname: ['Votre nom'],
      firstname: ['Votre prenom'],                  
                        
    });

   


  }

  addCard(){
   
    let newCard = new CardComponent(this.addCardForm['lastname'],this.addCardForm['firstname'] );
      
      
    this.CardToTabService.addToTab(newCard);
  }

}
