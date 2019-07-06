import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveProductFormComponent } from './reactive-product-form.component';

describe('ReactiveProductFormComponent', () => {
  let component: ReactiveProductFormComponent;
  let fixture: ComponentFixture<ReactiveProductFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveProductFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveProductFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
