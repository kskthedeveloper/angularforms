import { Component, OnInit } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  product: Product = new Product(
    1, "Product 1", 100, 10
  );

  constructor() { }

  ngOnInit() {
  }

}
