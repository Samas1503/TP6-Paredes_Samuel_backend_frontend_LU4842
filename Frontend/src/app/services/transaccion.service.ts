import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaccion } from '../models/transaccion';

@Injectable({
  providedIn: 'root',
})
export class TransaccionService {
  baseUrl = 'http://localhost:3000/api/transaccion/';
  constructor(private http: HttpClient) {}

  public getTransaccions(): Observable<any> {
    const httpOptions = {
      method: 'GET',
      headers: new HttpHeaders({}),
      params: new HttpParams({}),
    };
    return this.http.get(this.baseUrl, httpOptions);
  }
  public postTransaccion(transaccion: Transaccion) {
    const httpOptions = {
      method: 'POST',
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    let body = JSON.stringify(transaccion);
    return this.http.post(this.baseUrl, body, httpOptions);
  }
  public filterTransaccionsByEmail(email: string): Observable<any> {
    const httpOptions = {
      method: 'GET',
      headers: new HttpHeaders({}),
      params: {
        email: email,
      },
    };
    return this.http.get(this.baseUrl + 'filtro', httpOptions);
  }
  public filterTransaccionsByDivisas(
    origen: string,
    destino: string
  ): Observable<any> {
    const httpOptions = {
      method: 'GET',
      headers: new HttpHeaders({}),
      params: new HttpParams({}).set('origen', origen).set('destino', destino),
    };
    return this.http.get(this.baseUrl + 'filtro', httpOptions);
  }

  public getCurrecy(
    have: string,
    want: string,
    amount: number
  ): Observable<any> {
    const httpOptions = {
      mmrthod: 'GET',
      params: {
        have: have,
        want: want,
        amount: amount,
      },
      headers: new HttpHeaders({
        'X-RapidAPI-Host': 'currency-converter-by-api-ninjas.p.rapidapi.com',
        'X-RapidAPI-Key': 'f5bd839dc5msh43cdd353da82d74p17443cjsna0c6fb0266df',
      }),
    };
    return this.http.get(
      'https://currency-converter-by-api-ninjas.p.rapidapi.com/v1/convertcurrency',
      httpOptions
    );
  }
}
