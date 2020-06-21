export class ItemModel {
  id: number;
  title: string;
  cover: string;
  price: number;
  availability: boolean;
  currency: string;
  constructor(
      id: number,
      title: string,
      cover: string,
      price: number,
      availability: boolean,
      currency: string
              ){
    this.id = id;
    this.title = title;
    this.cover = cover;
    this.price = price;
    this.availability = availability;
    this.currency = currency;
  }
}
