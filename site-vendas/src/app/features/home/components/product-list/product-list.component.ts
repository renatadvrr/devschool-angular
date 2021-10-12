import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  @Input()
  title?: string = "";

  @Input()
  productsList: Array<Product> = []

  constructor() { }

  ngOnInit(): void {
  }

}
