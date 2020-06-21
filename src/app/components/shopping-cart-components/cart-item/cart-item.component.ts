import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartItemsModel } from '../cart-items.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {

  @Input() item: CartItemsModel;
  @Output() addPiece = new EventEmitter<number>();
  @Output() removePiece = new EventEmitter<number>();
  @Output() removeAllPieces = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  addOne() {
    this.addPiece.emit(this.item.id);
  }

  removeOne() {
    this.removePiece.emit(this.item.id);
  }

  removeFromCart() {
    this.removeAllPieces.emit(this.item.id);
  }

}
