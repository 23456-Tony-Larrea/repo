import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { BreadComponent } from './pages/catalogue/bread/bread.component';
import { DessertComponent } from './pages/catalogue/dessert/dessert.component';
import { DrinkComponent } from './pages/catalogue/drink/drink.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { InvoiceComponent } from './pages/invoice/invoice.component';
import { OrderComponent } from './pages/order/order.component';
import { PagesRoutingModule } from './pages/pages-routing.module';
import { PagesModule } from './pages/pages.module';
import { ListProductsComponent } from './admin/components/list-products/list-products.component';
import { AddEditProductsComponent } from './admin/components/add-edit-products/add-edit-products.component';

//import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'invoice', component: InvoiceComponent },
  { path: 'dessert', component: DessertComponent },
  {path: 'order', component: OrderComponent},
  {path: 'bread', component: BreadComponent},
  {path: 'drink', component: DrinkComponent},
  {path:'admin/list-products', component: ListProductsComponent},
  {path:'admin/add-edit-products', component: AddEditProductsComponent},
  { path: '', redirectTo: '/dashboard/', pathMatch: 'full' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
