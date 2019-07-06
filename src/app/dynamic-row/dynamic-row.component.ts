import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { Validators, FormBuilder, FormArray, FormGroup } from '@angular/forms';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'dynamic-row',
  templateUrl: './dynamic-row.component.html',
  styleUrls: ['./dynamic-row.component.css']
})
export class DynamicRowComponent implements OnInit {
  product: Product;
  total: number;

  productForm: FormGroup = this.fb.group({
    products: this.fb.array([])
  });

  get productFormArray() {
    return this.productForm.get('products') as FormArray;
  }

  addProduct() {
    const product = this.fb.group({
      id: [],
      name: [],
      price: [],
      quantity: []
    });
    
    this.productFormArray.push(product);
  }

  constructor(private fb: FormBuilder) { }


  ngOnInit() {
    
  }

  onSubmit() {
    this.product = this.productForm.value;
  }
}
