import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCardComponent } from './add-card/add-card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddColumnComponent } from './add-column/add-column.component';
import { CardComponent } from './card/card.component';
import { ColumnComponent } from './column/column.component';

@NgModule({
  declarations: [
    AppComponent,
    AddCardComponent,
    AddColumnComponent,
    CardComponent,
    ColumnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
