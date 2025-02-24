import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-supermercado-barato',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './supermercado-barato.component.html',
})
export class SupermercadoBaratoComponent {

  zonas: string[] = ["Mairena del Aljarafe", "Tomares", "Bormujos", "Camas", "San Juan de Aznalfarache"];
  supermercadosPorZona: Record<string, string[]> = {
    "Mairena del Aljarafe": ["Mercadona", "Carrefour", "Aldi", "Lidl"],
    "Tomares": ["Mercadona", "Carrefour", "Aldi", "Lidl"],
    "Bormujos": ["Mercadona", "Carrefour", "Aldi", "Lidl"],
    "Camas": ["Mercadona", "Carrefour", "Aldi", "Lidl"],
    "San Juan de Aznalfarache": ["Mercadona", "Carrefour", "Aldi", "Lidl"]
  };

  categoriasPorSupermercado: Record<string, string[]> = {
    Mercadona: ["Frutas y Verduras", "Carnes", "Lácteos", "Bebidas", "Legumbres", "Ecológicos", "Dulces", "Panadería", "Pastas", "Snacks", "Pescado", "Conservas", "Congelados"],
    Carrefour: ["Panadería", "Congelados", "Charcutería", "Dulces", "Legumbres", "Ecológicos", "Frutas y Verduras", "Pastas", "Snacks", "Conservas"],
    Lidl: ["Snacks", "Ecológicos", "Pastas", "Refrescos", "Legumbres", "Dulces", "Frutas y Verduras", "Panadería", "Pescado", "Conservas", "Congelados"],
    Aldi: ["Cereales", "Salsas", "Vinos", "Quesos", "Legumbres", "Ecológicos", "Dulces", "Frutas y Verduras", "Panadería", "Pastas", "Snacks", "Pescado", "Conservas", "Congelados"],
    DIA: ["Legumbres", "Conservas", "Pescado", "Bollería", "Ecológicos", "Dulces", "Frutas y Verduras", "Panadería", "Pastas", "Snacks", "Congelados"]
  };

  productosPorSupermercado: Record<string, Record<string, { nombre: string, precio: number }[]>> = {
    "Mercadona": {
      "Frutas y Verduras": [{ nombre: "Manzanas", precio: 1.99 }, { nombre: "Plátanos", precio: 1.50 }],
      "Carnes": [{ nombre: "Pollo", precio: 4.99 }, { nombre: "Ternera", precio: 9.50 }],
      "Legumbres": [
        { nombre: "Lentejas pardinas", precio: 1.29 },
        { nombre: "Garbanzos cocidos", precio: 1.89 },
        { nombre: "Alubias blancas cocidas", precio: 1.49 }
      ],
      "Ecológicos": [
        { nombre: "Tomates ecológicos", precio: 2.50 },
        { nombre: "Lechuga ecológica", precio: 1.80 }
      ],
      "Dulces": [
        { nombre: "Galletas de chocolate", precio: 2.99 },
        { nombre: "Chicles", precio: 1.10 }
      ],
      "Panadería": [
        { nombre: "Pan de barra", precio: 0.85 },
        { nombre: "Croissants", precio: 1.50 }
      ],
      "Pastas": [
        { nombre: "Espaguetis", precio: 1.25 },
        { nombre: "Macarrones", precio: 1.50 }
      ],
      "Snacks": [
        { nombre: "Patatas fritas", precio: 1.80 },
        { nombre: "Palomitas", precio: 1.20 }
      ],
      "Pescado": [
        { nombre: "Salmón", precio: 6.50 },
        { nombre: "Merluza", precio: 5.20 }
      ],
      "Conservas": [
        { nombre: "Atún en aceite", precio: 1.30 },
        { nombre: "Guisantes en conserva", precio: 0.90 }
      ],
      "Congelados": [
        { nombre: "Pizzas congeladas", precio: 3.50 },
        { nombre: "Verduras congeladas", precio: 2.20 }
      ]
    },
    "Carrefour": {
      "Frutas y Verduras": [{ nombre: "Manzanas", precio: 1.80 }, { nombre: "Plátanos", precio: 1.45 }],
      "Carnes": [{ nombre: "Pollo", precio: 4.50 }, { nombre: "Ternera", precio: 9.00 }],
      "Legumbres": [
        { nombre: "Lentejas pardinas", precio: 1.50 },
        { nombre: "Garbanzos cocidos", precio: 0.75 },
        { nombre: "Alubias blancas cocidas", precio: 1.30 }
      ],
      "Ecológicos": [
        { nombre: "Acelga ecológica", precio: 2.20 },
        { nombre: "Zanahorias ecológicas", precio: 1.90 }
      ],
      "Dulces": [
        { nombre: "Tartas de chocolate", precio: 3.80 },
        { nombre: "Bombones", precio: 2.40 }
      ],
      "Panadería": [
        { nombre: "Pan de molde", precio: 1.20 },
        { nombre: "Bollos", precio: 1.50 }
      ],
      "Pastas": [
        { nombre: "Espaguetis", precio: 1.10 },
        { nombre: "Macarrones", precio: 1.20 }
      ],
      "Snacks": [
        { nombre: "Frutos secos", precio: 2.20 },
        { nombre: "Chicles", precio: 1.00 }
      ],
      "Conservas": [
        { nombre: "Almejas en conserva", precio: 2.80 },
        { nombre: "Maíz en conserva", precio: 0.85 }
      ],
      "Congelados": [
        { nombre: "Verduras congeladas", precio: 2.00 },
        { nombre: "Patatas fritas congeladas", precio: 2.10 }
      ]
    },
    // Puedes agregar las categorías faltantes para Lidl, Aldi y DIA de manera similar
  };

  supermercados: string[] = [];
  categorias: string[] = [];
  supermercadoMasBarato: string = "";
  productosMasBaratos: { nombre: string, precio: number }[] = [];

  actualizarSupermercados(event: Event) {
    const zona = (event.target as HTMLSelectElement).value;
    this.supermercados = zona ? this.supermercadosPorZona[zona] || [] : [];
    this.categorias = [...new Set(this.supermercados.flatMap(supermercado => this.categoriasPorSupermercado[supermercado] || []))];
    this.supermercadoMasBarato = "";
    this.productosMasBaratos = [];
  }

  buscarSupermercadoMasBarato(event: Event) {
    const categoria = (event.target as HTMLSelectElement).value;
    if (!categoria) return;

    let mejorSupermercado = "";
    let mejoresPrecios: { nombre: string, precio: number }[] = [];
    let menorPrecioTotal = Infinity;

    for (const supermercado of this.supermercados) {
      const productos = this.productosPorSupermercado[supermercado]?.[categoria] || [];
      if (productos.length === 0) continue;

      const precioTotal = productos.reduce((sum, prod) => sum + prod.precio, 0);
      
      if (precioTotal < menorPrecioTotal) {
        menorPrecioTotal = precioTotal;
        mejorSupermercado = supermercado;
        mejoresPrecios = productos;
      }
    }

    this.supermercadoMasBarato = mejorSupermercado;
    this.productosMasBaratos = mejoresPrecios;
  }
}
