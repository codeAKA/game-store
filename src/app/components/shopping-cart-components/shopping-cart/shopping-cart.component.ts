import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { CartItemsModel } from '../cart-items.model';
import { SharedService } from 'src/app/services/shared-service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShoppingCartComponent implements OnInit, OnDestroy {

  public productsInCart: CartItemsModel[] = [];
  public item: CartItemsModel;
  public priceOfCartProducts = 0;
  private sharedItemSubscribtion;

  constructor(public itemService: SharedService, private cd: ChangeDetectorRef) { }

  ngOnDestroy(): void {
    this.sharedItemSubscribtion.unsubscribe();
  }

  ngOnInit(): void {

    this.sharedItemSubscribtion = this.itemService.sharedItem.pipe(filter(el => el !== null))
      .subscribe(item => {
        this.item = item;

        if (this.productsInCart.find(prod => prod.id === item.id)) {
          this.addProduct(item.id);
        } else {
          this.productsInCart.push(
            new CartItemsModel(item.id,
              item.title,
              item.cover,
              item.price,
              item.availability,
              item.currency,
              1,
              item.price)
          );
          this.cartProductsPrice();
        }
      });
  }

  addOne(id) {
    this.addProduct(id);
  }

  removeOne(id) {
    this.productsInCart.forEach(prod => {
      if (prod.id === id) {
        prod.itemsNumber--;
        if (prod.itemsNumber === 0) {
          this.removeAll(id);
          return;
        }
        prod.totalPriceOfItems = Math.round((prod.price * prod.itemsNumber) * 100) / 100;
        this.cartProductsPrice();
      }
    });
  }

  removeAll(id) {
    this.productsInCart = this.productsInCart.filter(prod => prod.id !== id);
    this.cartProductsPrice();
  }

  addProduct(id) {
    this.productsInCart.forEach(prod => {
      if (prod.id === id) {
        prod.itemsNumber++;
        prod.totalPriceOfItems = Math.round((prod.price * prod.itemsNumber) * 100) / 100;
        this.cartProductsPrice();
      }
    });
  }

  cartProductsPrice() {
    this.cd.markForCheck();
    return this.priceOfCartProducts = this.productsInCart.length > 0 ? this.productsInCart.map(item => item.totalPriceOfItems).reduce((prev, next) => prev + next) : 0;
  }

}
