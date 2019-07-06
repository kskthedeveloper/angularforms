import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ReactiveProductFormComponent } from './reactive-product-form/reactive-product-form.component';
import { FormBuilderProductFormComponent } from './form-builder-product-form/form-builder-product-form.component';
import { DynamicRowComponent } from './dynamic-row/dynamic-row.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductFormComponent,
    ReactiveProductFormComponent,
    FormBuilderProductFormComponent,
    DynamicRowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
