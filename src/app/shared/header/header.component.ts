import { Component, OnInit } from '@angular/core';
import { InfoPagesService } from 'src/app/services/info-pages.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(public infoService: InfoPagesService, private router: Router) {}

  ngOnInit(): void {}

  buscarProducto(txtBuscar: string): void {
    if (txtBuscar.length < 1) {
      return;
    }
    this.router.navigate(['/search', txtBuscar]);
  }
}
