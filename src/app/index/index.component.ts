import { Component, OnInit } from '@angular/core';
import { DisplayHeaderService } from '../services/display.header.service'
import { ActivatedRoute } from '@angular/router';
import { Product } from '../services/products.service';
import { ProductService } from '../services/products.service'

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  productsToDisplay: Product[];

  constructor(private productArray: ProductService) { }

  ngOnInit(): void {

    this.productsToDisplay = this.productArray.products;
  }

}
