import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { ItemModel } from './item.model';
import { SharedService } from '../../../services/shared-service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemComponent implements OnInit {

  @Input() item: ItemModel;

  constructor(public itemService: SharedService) { }

  ngOnInit(): void {
  }

  addToCart() {
    this.itemService.setItem(this.item);
  }

}
