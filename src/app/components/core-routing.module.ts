
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ItemsListComponent } from './items-components/items-list/items-list.component';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ]
})
export class CoreRoutingModule { }
