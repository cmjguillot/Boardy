import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCardComponent } from './add-card/add-card.component';
import { AddColumnComponent } from './add-column/add-column.component';


const routes: Routes = [
  { path: 'addCard', component: AddCardComponent },
  { path: 'addColumn', component: AddColumnComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
