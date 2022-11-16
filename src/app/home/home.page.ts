import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  animales: any;
  filtro: string = '';

  constructor(private httpClient: HttpClient) {
    this.animales = this.httpClient.get('https://raw.githubusercontent.com/jmangam/Archivo-Json-animales/main/animales.json');
  }

}
