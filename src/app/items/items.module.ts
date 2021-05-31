import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ShoppingListComponent } from './shopping-list.component';
import { CreateListComponent } from './create-list.component';

import { ItemsRoutingModule } from './items-routing.module';

//import { HeroesRoutingModule } from './heroes-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ItemsRoutingModule
  ],
  declarations: [
    ShoppingListComponent,
    CreateListComponent
  ]
})
export class ItemsModule {}