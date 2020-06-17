import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';
import { ProductoItemInterface } from '../../models/producto.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  producto: ProductoItemInterface;
  productoId = '';
  cargando = true;

  constructor(
    private route: ActivatedRoute,
    public productosService: ProductosService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: any): void => {
      this.productosService
        .getProducto(params.id)
        .subscribe((resp: ProductoItemInterface): void => {
          this.producto = resp;
          this.productoId = params.id;
          this.cargando = false;
        });
    });
  }
}
