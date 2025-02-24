import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importar FormsModule
interface Producto {
  nombre: string; /* declaro la variable nombre del producto */

}

interface Supermercado {
  nombre: string; /* esta variable es la del supermercado */
  productos: Producto[];/* aqui voy guardando en un array los productos que voy agregando  */
}

@Component({
  selector: 'app-producto-vendido',
  imports: [CommonModule,FormsModule],
  templateUrl: './producto-vendido.component.html',
  styleUrl: './producto-vendido.component.scss'
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

  // Función para actualizar los productos del supermercado seleccionado
  mostrarProductos(supermercado: string) {
    const supermercadoSeleccionado = this.supermercados.find(s => s.nombre === supermercado);
    if (supermercadoSeleccionado) {
      this.productosDelSupermercado = supermercadoSeleccionado.productos;
    }
  }

  
}
