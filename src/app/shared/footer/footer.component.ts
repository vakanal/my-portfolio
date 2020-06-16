import { Component, OnInit } from '@angular/core';
import { InfoPagesService } from 'src/app/services/info-pages.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  anio: number = new Date().getFullYear();

  constructor(public infoService: InfoPagesService) {}

  ngOnInit(): void {}
}
