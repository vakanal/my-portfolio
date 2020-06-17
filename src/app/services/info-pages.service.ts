import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPage, InfoEquipo } from '../models/info-page.interface';

@Injectable({
  providedIn: 'root',
})
export class InfoPagesService {
  cargada = false;
  info: InfoPage = {};
  equipo: InfoEquipo[] = [];

  constructor(private http: HttpClient) {
    this.cargarInfo();
    this.cargarEquipo();
  }

  private cargarInfo(): void {
    this.http
      .get('assets/data/data-pages.json')
      .subscribe((resp: InfoPage): void => {
        this.cargada = true;
        this.info = resp;
      });
  }

  private cargarEquipo(): void {
    this.http
      .get('https://my-portfolio-57601.firebaseio.com/equipo.json')
      .subscribe((resp: InfoEquipo[]): void => {
        this.equipo = resp;
      });
  }
}
