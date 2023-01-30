import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthComponent } from './auth/auth.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages.component';
import { SharedComponent } from './shared/shared.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PagesModule } from './pages/pages.module';
import { PagesRoutingModule } from './pages/pages-routing.module';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ListProductsComponent } from './admin/components/list-products/list-products.component';
import { AddEditProductsComponent } from './admin/components/add-edit-products/add-edit-products.component';
import { NavbarComponent } from './admin/components/navbar/navbar.component';
import { ProgressBarComponent } from './admin/components/shared/progress-bar/progress-bar.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    PagesComponent,
    SharedComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    ListProductsComponent,
    AddEditProductsComponent,
    NavbarComponent,
    ProgressBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    AppComponent,
    AuthComponent,
    PagesComponent,
    SharedComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
