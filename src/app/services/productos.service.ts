import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductoInterface } from '../models/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;

  constructor(private http: HttpClient) {
    this.cargarProductos();
  }

  private cargarProductos(): void {
    this.http
      .get('https://my-portfolio-57601.firebaseio.com/productos_idx.json')
      .subscribe((resp: ProductoInterface[]): void => {
        console.log(resp);
        this.cargando = false;
      });
  }
}
