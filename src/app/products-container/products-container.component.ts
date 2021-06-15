import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-container',
  templateUrl: './products-container.component.html',
  styleUrls: ['./products-container.component.scss']
})
export class ProductsContainerComponent implements OnInit {
  @Input() name: string;
  @Input() price: number;
  @Input() image: string;
  @Input() background: string;

  constructor() { }

  ngOnInit(): void {
  }

}
