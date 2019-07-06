import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { combineLatest } from 'rxjs';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'form-builder-product-form',
  templateUrl: './form-builder-product-form.component.html',
  styleUrls: ['./form-builder-product-form.component.css']
})
export class FormBuilderProductFormComponent implements OnInit {
  product: Product;

  total: number;

  productForm2 = this.fb.group({
    id: ['', Validators.required],
    name: [''],
    price: [''],
    quantity: ['']
  });

  constructor(private fb: FormBuilder) { }


  ngOnInit() {
    combineLatest(
      this.productForm2.get('price').valueChanges,
      this.productForm2.get('quantity').valueChanges,
    ).subscribe(([price, quantity])=> {
      this.total = price * quantity;
    })
  }

  onSubmit() {
    this.product = this.productForm2.value;
  }
}
