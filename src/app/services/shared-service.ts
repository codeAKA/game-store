import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class SharedService {

  private item = new BehaviorSubject(null);
  sharedItem = this.item.asObservable();

  constructor() { }

  setItem(newItem) {
    this.item.next(newItem);
    console.log(newItem);
  }

}
