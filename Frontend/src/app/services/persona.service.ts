import { Persona } from 'src/app/models/persona';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PersonaService {
  baseUrl = 'http://localhost:3000/api/persona/';
  constructor(private http: HttpClient) {}
  public getPersonas(): Observable<any> {
    const httpOptions = {
      method: 'GET',
      headers: new HttpHeaders({}),
      params: new HttpParams({}),
    };
    return this.http.get(this.baseUrl, httpOptions);
  }
  public getPersona(dni: string): Observable<any> {
    const httpOptions = {
      method: 'GET',
      headers: new HttpHeaders({}),
      params: new HttpParams({}),
    };
    return this.http.get(this.baseUrl + dni, httpOptions);
  }
  public postPersona(persona: Persona) {
    const httpOptions = {
      method: 'POST',
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      params: new HttpParams({}),
    };
    let body = JSON.stringify(persona);
    return this.http.post(this.baseUrl, body, httpOptions);
  }
}
