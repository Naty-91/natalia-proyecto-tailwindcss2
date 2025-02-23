import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupermercadoBaratoComponent } from './supermercado-barato.component';

describe('SupermercadoBaratoComponent', () => {
  let component: SupermercadoBaratoComponent;
  let fixture: ComponentFixture<SupermercadoBaratoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupermercadoBaratoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupermercadoBaratoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
