import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { url } from './globals';


export const environment = {
  production: false,
  apiUrl: url,
};

@Injectable({
  providedIn: 'root'
})
export class ApiServices {
  public apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  private finalURL(endpoint: string) {
    return `${this.apiUrl}${endpoint}`
  }

  getFile(endpoint: string, options?: any) {
    return this.http.get(this.finalURL(endpoint), options);
  }

  get(endpoint: string, queryParams?: any): Observable<any> {
    return this.http.get(this.finalURL(endpoint), { params: queryParams })
  }

  post(endpoint: string, body: any, queryParams?: any): Observable<any> {
    return this.http.post(this.finalURL(endpoint), body, { params: queryParams })
  }

  put(endpoint: string, body?: any, queryParams?: any): Observable<any> {
    return this.http.put(this.finalURL(endpoint), body, { params: queryParams })
  }

  delete(endpoint: string, queryParams?: any): Observable<any> {
    return this.http.delete(this.finalURL(endpoint), { params: queryParams })
  }
}