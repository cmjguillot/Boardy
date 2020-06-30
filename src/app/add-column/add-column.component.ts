import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ColumnComponent } from '../column/column.component';

@Component({
  selector: 'app-add-column',
  templateUrl: './add-column.component.html',
  styleUrls: ['./add-column.component.scss']
})
export class AddColumnComponent implements OnInit {
  addColumnForm : FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.addColumnForm = this.fb.group({  

      nomColumn: ['Nom de votre column'],
                 
                        
    });

  }

  addColumn() {

    let newColumn = new ColumnComponent(this.addColumnForm['nomColumn']);

  }

}
