import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';
// import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AboutComponent } from './about/about.component';
import { CalcComponent } from './calc/calc.component';
import { UnitComponent } from './unit/unit.component';
import { LogoutComponent } from './logout/logout.component';
import { CurrencyComponent } from './currency/currency.component';
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    CalcComponent,
    CurrencyComponent,
    LoginComponent,
    LogoutComponent,
    SignupComponent,
    UnitComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule, 
    // ToastrModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
