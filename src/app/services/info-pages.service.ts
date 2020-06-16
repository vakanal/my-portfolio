import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPage } from '../models/info-page.interface';

@Injectable({
  providedIn: 'root',
})
export class InfoPagesService {
  info: InfoPage = {};
  cargada = false;
  constructor(private http: HttpClient) {
    this.http.get('assets/data/data-pages.json').subscribe((resp: InfoPage) => {
      this.cargada = true;
      this.info = resp;
    });
  }
}
