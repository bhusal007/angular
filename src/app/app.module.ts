import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { MissedFileComponent } from './Components/missed-file/missed-file.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    
    HomeComponent,
    LoginComponent,
    DashboardComponent,
    MissedFileComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
