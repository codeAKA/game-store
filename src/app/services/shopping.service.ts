import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ItemModel } from '../components/items-components/item/item.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
// import * as jsonData from '../../assets/items.json';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  private path = '../../assets/items.json';

  constructor(private http: HttpClient) {
  }

  getItems(): Observable<ItemModel[]> {
    return this.http.get<ItemModel[]>(this.path)
      .pipe(map(result => result.map(item => {
        return new ItemModel(
          item.id,
          item.title,
          item.cover,
          item.price,
          item.availability,
          item.currency
          );
      }
      )));
  }
}
