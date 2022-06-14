import { Pasaje } from './../models/pasaje';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PasajeService {
  baseUrl = 'http://localhost:3000/api/pasaje/';
  constructor(private http: HttpClient) {}

  public getPasajes(): Observable<any> {
    const httpOptions = {
      method: 'GET',
      headers: new HttpHeaders({}),
      params: new HttpParams({}),
    };
    return this.http.get(this.baseUrl, httpOptions);
  }
  public getPasaje(id: string): Observable<any> {
    const httpOptions = {
      method: 'GET',
      headers: new HttpHeaders({}),
      params: new HttpParams({}),
    };
    return this.http.get(this.baseUrl + id, httpOptions);
  }
  public filterPasajesByCategoria(categoria: string): Observable<any> {
    const httpOptions = {
      method: 'GET',
      headers: new HttpHeaders({}),
      params: new HttpParams({}),
    };
    return this.http.get(this.baseUrl + 'filtro/'+categoria, httpOptions);
  }
  public deletePasaje(id: string) {
    const httpOptions = {
      method: 'DELETE',
      headers: new HttpHeaders({}),
      params: new HttpParams({}),
    };
    return this.http.delete(this.baseUrl + id, httpOptions);
  }
  public postPasaje(pasaje: Pasaje) {
    const httpOptions = {
      method: 'POST',
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      params: new HttpParams({}),
    };
    const body = JSON.stringify(pasaje);
    return this.http.post(this.baseUrl, body, httpOptions);
  }
  public putPasaje(pasaje: Pasaje) {
    const httpOptions = {
      method: 'PUT',
      headers: new HttpHeaders({}),
      params: new HttpParams({}),
    };
    const body = {
      _id: pasaje._id,
      precioPasaje: pasaje.precioPasaje,
      categoriaPasajero: pasaje.categoriaPasajero,
      fechaCompra: pasaje.fechaCompra,
      pasajero: pasaje.pasajero,
    };
    return this.http.put(this.baseUrl + pasaje._id, body, httpOptions);
  }
}
