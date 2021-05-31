import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AppComponent } from './app.component';
import { ItemsModule } from './items/items.module';
import { AppRoutingModule } from './app-routing.module';
@NgModule({
  imports:      [ BrowserModule, FormsModule, ItemsModule, AppRoutingModule],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { 
  constructor(router: Router){}

}
