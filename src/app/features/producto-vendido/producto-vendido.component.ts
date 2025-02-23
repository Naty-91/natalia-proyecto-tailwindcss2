import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Producto {
  nombre: string;
  precio: number; // Precio en euros
}

interface Supermercado {
  nombre: string;
  productos: Producto[];
}

@Component({
  selector: 'app-producto-vendido',
  imports: [CommonModule],
  templateUrl: './producto-vendido.component.html',
  styleUrl: './producto-vendido.component.scss'
})
export class ProductoVendidoComponent {
  supermercados: Supermercado[] = [
    {
      nombre: 'Mercadona',
      productos: [
        { nombre: 'Leche', precio: 1.20 },
        { nombre: 'Pan', precio: 0.95 },
        { nombre: 'Arroz', precio: 1.50 },
        { nombre: 'Pollo', precio: 4.80 },
      ],
    },
    {
      nombre: 'Aldi',
      productos: [
        { nombre: 'Leche', precio: 1.10 },
        { nombre: 'Pan', precio: 0.85 },
        { nombre: 'Arroz', precio: 1.30 },
        { nombre: 'Pollo', precio: 4.60 },
      ],
    },
    {
      nombre: 'Lidl',
      productos: [
        { nombre: 'Leche', precio: 1.25 },
        { nombre: 'Pan', precio: 0.90 },
        { nombre: 'Arroz', precio: 1.40 },
        { nombre: 'Pollo', precio: 4.70 },
      ],
    },
    {
      nombre: 'DIA',
      productos: [
        { nombre: 'Leche', precio: 1.05 },
        { nombre: 'Pan', precio: 0.80 },
        { nombre: 'Arroz', precio: 1.20 },
        { nombre: 'Pollo', precio: 4.50 },
      ],
    },
    {
      nombre: 'Carrefour',
      productos: [
        { nombre: 'Leche', precio: 1.30 },
        { nombre: 'Pan', precio: 1.00 },
        { nombre: 'Arroz', precio: 1.60 },
        { nombre: 'Pollo', precio: 4.90 },
      ],
    },
  ];

  supermercadoSeleccionado: string = '';
  productosDelSupermercado: Producto[] = [];

  // Función para actualizar los productos del supermercado seleccionado
  mostrarProductos(supermercado: string) {
    const supermercadoSeleccionado = this.supermercados.find(s => s.nombre === supermercado);
    if (supermercadoSeleccionado) {
      this.productosDelSupermercado = supermercadoSeleccionado.productos;
    }
  }
}
