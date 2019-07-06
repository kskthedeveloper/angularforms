import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBuilderProductFormComponent } from './form-builder-product-form.component';

describe('FormBuilderProductFormComponent', () => {
  let component: FormBuilderProductFormComponent;
  let fixture: ComponentFixture<FormBuilderProductFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormBuilderProductFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormBuilderProductFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
