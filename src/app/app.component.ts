import { Component } from '@angular/core';
import { Column } from './@shared/model/column';
import { CardToTabService } from './card-to-tab.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Boardy';
  columns: Column[];

  constructor(
    private cardToTabService: CardToTabService
  ) {

  }

  ngOnInit(): void {
    this.columns = this.cardToTabService.getColumnList();
  }
}

