import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ColumnComponent } from '../column/column.component';
import { CardToTabService } from 'src/app/card-to-tab.service';

@Component({
  selector: 'app-add-column',
  templateUrl: './add-column.component.html',
  styleUrls: ['./add-column.component.scss']
})
export class AddColumnComponent implements OnInit {
  addColumnForm : FormGroup;

  constructor(private CardToTabService: CardToTabService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.addColumnForm = this.fb.group({
      nomColumn: ['Nom de votre column']
    });
  }

  addColumn() {
    let title = this.addColumnForm['nomColumn'];
    this.CardToTabService.addToColumnList(title);
  }

}
