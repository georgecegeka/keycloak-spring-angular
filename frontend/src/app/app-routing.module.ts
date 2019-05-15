import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FeedingComponent} from './feeding/feeding.component';

const routes: Routes = [
  {
    path: 'crocodiles',
    component: FeedingComponent
  },
  {
    path: 'spiders',
    component: FeedingComponent
  },
  {
    path: 'aliens',
    component: FeedingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
