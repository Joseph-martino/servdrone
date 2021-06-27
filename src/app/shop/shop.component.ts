import { Component, OnInit } from '@angular/core';
import { Product } from '../services/products.service';
import { ProductService } from '../services/products.service';


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
products: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.products = this.productService.products;
  }

}
