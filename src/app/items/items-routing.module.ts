import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShoppingListComponent } from './shopping-list.component';
import { CreateListComponent } from './create-list.component';
import { DirtyCheckGuard } from '../../guards/dirtycheck.guard';
const itemsRoutes: Routes = [
  {
    path: '',
    children: [
       { path: '', redirectTo: 'list', pathMatch: "full" },
      { path: 'list', component: ShoppingListComponent },
      { path: 'create', component: CreateListComponent, canDeactivate: [DirtyCheckGuard] }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(itemsRoutes)],
  exports: [RouterModule]
})
export class ItemsRoutingModule {}
