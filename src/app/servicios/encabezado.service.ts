import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { encabezado } from '../model/encabezado.model';

@Injectable({
  providedIn: 'root'
})

export class EncabezadoService {
  URL = 'http://localhost:8080/api/';

  constructor(private http: HttpClient) { }

  public obtenerEncabezado(): Observable<encabezado>{
    return this.http.get<encabezado>(this.URL + 'ver/encabezado');
 }
}