import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Product } from '../product';
import { Observable,combineLatest } from 'rxjs';

@Component({
  selector: 'reactive-product-form',
  templateUrl: './reactive-product-form.component.html',
  styleUrls: ['./reactive-product-form.component.css']
})
export class ReactiveProductFormComponent implements OnInit {

  product: Product;

  total: number;
  rate: number = 15;

  productForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    price: new FormControl(''),
    quantity: new FormControl(''),
  });

  constructor() { }

  ngOnInit() {
    combineLatest(
      this.productForm.get('price').valueChanges,
      this.productForm.get('quantity').valueChanges,
    ).subscribe(([price, quantity])=> {
      this.total = price * quantity;
    })
  }

  onSubmit() {
    this.product = this.productForm.value;
  }

}
