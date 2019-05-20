import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule , routingComponent } from './app-routing.module';
import { LoginComponent } from './book/login/login.component';
import {GuestBookService} from './book/guestbook.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    routingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [GuestBookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
