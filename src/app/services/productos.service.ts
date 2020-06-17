import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductoInterface } from '../models/producto.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  cargando = true;
  productos: ProductoInterface[] = [];
  productosFiltrado: ProductoInterface[] = [];

  constructor(private http: HttpClient) {
    this.cargarProductos();
  }

  private cargarProductos() {
    return new Promise((resolve, reject) => {
      this.http
        .get('https://my-portfolio-57601.firebaseio.com/productos_idx.json')
        .subscribe((resp: ProductoInterface[]): void => {
          this.productos = resp;
          this.cargando = false;
          resolve();
        });
    });
  }

  getProducto(id: string): any {
    return this.http.get(
      `https://my-portfolio-57601.firebaseio.com/productos/${id}.json`
    );
  }

  buscarProducto(termino: string) {
    if (this.productos.length === 0) {
      this.cargarProductos().then(() => {
        this.filtrarProductos(termino);
      });
    } else {
      this.filtrarProductos(termino);
    }
  }

  private filtrarProductos(termino: string) {
    this.productosFiltrado = this.productos.filter(
      (producto: ProductoInterface) =>
        producto.categoria.toLowerCase().indexOf(termino.toLowerCase()) >= 0 ||
        producto.titulo.toLowerCase().indexOf(termino.toLowerCase()) >= 0
    );
  }
}
