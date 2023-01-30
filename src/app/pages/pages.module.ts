import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { DessertComponent } from './catalogue/dessert/dessert.component';
import { CashComponent } from './cash/cash.component';
import { DrinkComponent } from './catalogue/drink/drink.component';
import { OrderComponent } from './order/order.component';
import { BreadComponent } from './catalogue/bread/bread.component';




@NgModule({
  declarations: [
    DashboardComponent,
    InvoiceComponent,
    DessertComponent,
    CashComponent,
    OrderComponent,
    BreadComponent,
    DrinkComponent
  ],
  imports: [

    RouterModule,
  ],
  exports:[
    DashboardComponent,
    OrderComponent
  ]
})
export class PagesModule { }
