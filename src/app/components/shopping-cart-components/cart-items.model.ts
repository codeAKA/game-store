import { ItemModel } from '../items-components/item/item.model';

export class CartItemsModel extends ItemModel {

  itemsNumber: number;
  totalPriceOfItems: number;

  constructor(
    id: number,
    title: string,
    cover: string,
    price: number,
    availability: boolean,
    currency: string,
    itemsNumber: number,
    totalPriceOfItems: number
  ) {
    super(id, title, cover, price, availability, currency);

    this.itemsNumber = itemsNumber;
    this.totalPriceOfItems = totalPriceOfItems;
  }

}
