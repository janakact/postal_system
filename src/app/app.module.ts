import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { HomeComponent } from './home/home.component';
import { TodayStatComponent } from './today-stat/today-stat.component';
import { CheckingComponent } from './checking/checking.component';
import { DeliverComponent } from './deliver/deliver.component';
import { SubmitSuccessComponent } from './submit-success/submit-success.component';

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    HomeComponent,
    TodayStatComponent,
    CheckingComponent,
    DeliverComponent,
    SubmitSuccessComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
