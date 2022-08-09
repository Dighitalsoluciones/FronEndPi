import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrincipalPorfolioService {

  constructor(private http:HttpClient) { }

  obtenerDatos():Observable<any>{
    return this.http.get('json');
  }
}
