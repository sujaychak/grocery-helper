import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {
    path: 'items',
    loadChildren: () => import('./items/items.module').then(m => m.ItemsModule),
    //data: { preload: true }
  },
  { path: '',   redirectTo: '/items', pathMatch: 'full' },
  //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: false, // <-- debugging purposes only
        //preloadingStrategy: SelectivePreloadingStrategyService,
      }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }