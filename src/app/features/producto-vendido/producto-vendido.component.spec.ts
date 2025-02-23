import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoVendidoComponent } from './producto-vendido.component';

describe('ProductoVendidoComponent', () => {
  let component: ProductoVendidoComponent;
  let fixture: ComponentFixture<ProductoVendidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductoVendidoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductoVendidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
