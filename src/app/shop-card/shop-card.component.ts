import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../services/products.service';
import { ProductService } from '../services/products.service';

@Component({
  selector: 'app-shop-card',
  templateUrl: './shop-card.component.html',
  styleUrls: ['./shop-card.component.scss']
})
export class ShopCardComponent implements OnInit {
@Input() product: Product ;

  constructor() { }

  ngOnInit(): void {

  }

}
