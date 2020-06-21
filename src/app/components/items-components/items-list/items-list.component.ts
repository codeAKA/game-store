import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ShoppingService } from '../../../services/shopping.service';
import { Observable } from 'rxjs';
import { ItemModel } from '../item/item.model';
import { share, take, filter } from 'rxjs/operators';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemsListComponent implements OnInit {

  public productItems$: Observable<ItemModel[]>;

  constructor(private itemService: ShoppingService) { }

  ngOnInit(): void {
    this.productItems$ = this.itemService.getItems().pipe(take(1), filter(i => i !== undefined), share());
    this.productItems$.subscribe(data => console.log(data));
    console.log(this.productItems$);
  }

}
