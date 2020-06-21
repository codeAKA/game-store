
import { ItemsListComponent } from './items-components/items-list/items-list.component';
import { ItemComponent } from './items-components/item/item.component';
import { ShoppingCartComponent } from './shopping-cart-components/shopping-cart/shopping-cart.component';
import { NgModule } from '@angular/core';
// material
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';
import { SharedService } from '../services/shared-service';
import { CartItemComponent } from './shopping-cart-components/cart-item/cart-item.component';

@NgModule({
  declarations: [
    MainLayoutComponent,
    ItemsListComponent,
    ItemComponent,
    ShoppingCartComponent,
    HomeComponent,
    CartItemComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    // material
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule
  ],
  providers: [
    SharedService
  ],
  exports: [
    RouterModule,
    MainLayoutComponent,
    ItemsListComponent,
    ItemComponent,
    ShoppingCartComponent,
    HomeComponent,
    CartItemComponent
  ]
})
export class CoreModule { }
