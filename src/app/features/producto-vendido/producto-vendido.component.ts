import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importar FormsModule

interface Producto {
  nombre: string;
}

interface Supermercado {
  nombre: string;
  productos: Producto[];
}

@Component({
  selector: 'app-producto-vendido',
  imports: [CommonModule, FormsModule],
  templateUrl: './producto-vendido.component.html',
  styleUrls: ['./producto-vendido.component.scss']
})
export class ProductoVendidoComponent {
  supermercados: Supermercado[] = [
    {
      nombre: 'Mercadona',
      productos: [
        { nombre: 'Aceite de oliva' },
        { nombre: 'Jamón serrano' },
        { nombre: 'Café molido' },
        { nombre: 'Salchichas frescas' },
      ],
    },
    {
      nombre: 'Aldi',
      productos: [
        { nombre: 'Mantequilla' },
        { nombre: 'Queso curado' },
        { nombre: 'Cereal integral' },
        { nombre: 'Pechuga de pavo' },
      ],
    },
    {
      nombre: 'Lidl',
      productos: [
        { nombre: 'Yogur natural' },
        { nombre: 'Tomates en conserva' },
        { nombre: 'Pasta de trigo' },
        { nombre: 'Filetes de merluza' },
      ],
    },
    {
      nombre: 'DIA',
      productos: [
        { nombre: 'Yogur griego' },
        { nombre: 'Aguacates' },
        { nombre: 'Leche entera DIA' },
      ],
    },
    {
      nombre: 'Carrefour',
      productos: [
        { nombre: 'Chocolate negro' },
        { nombre: 'Galletas digestivas' },
        { nombre: 'Legumbres variadas' },
        { nombre: 'Pechuga de pollo' },
      ],
    },
  ];

  supermercadoSeleccionado: string = '';
  productosDelSupermercado: Producto[] = [];
  productosFiltrados: Producto[] = [];
  searchQuery: string = '';
  dropdownVisible: boolean = false; // Variable para controlar la visibilidad del dropdown

  // Función para actualizar los productos del supermercado seleccionado
  mostrarProductos(supermercado: string) {
    const supermercadoSeleccionado = this.supermercados.find(s => s.nombre === supermercado);
    if (supermercadoSeleccionado) {
      this.supermercadoSeleccionado = supermercado;
      this.productosDelSupermercado = supermercadoSeleccionado.productos;
      this.productosFiltrados = [...this.productosDelSupermercado];
    }
  }

  // Función para mostrar/ocultar el dropdown
  toggleDropdown() {
    this.dropdownVisible = !this.dropdownVisible;
  }

  // Función para filtrar productos según la búsqueda
  filtrarProductos() {
    if (this.searchQuery.trim() === '') {
      this.productosFiltrados = [...this.productosDelSupermercado];
    } else {
      this.productosFiltrados = this.productosDelSupermercado.filter(producto =>
        producto.nombre.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  }
}
