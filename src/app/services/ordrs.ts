import { Injectable } from '@angular/core';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import {ordrs} from './../models/ordrs';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpEvent, HttpUserEvent, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Ordrs {

  private baseUrl: string = "http://localhost:3000/commandes";
  

  httpOptions =
  {
    headers: new HttpHeaders({
      'Content-Type': 'application/Json'
    })
  }
  constructor(private http: HttpClient) { }

  // ajouter phone

  addDeliverycompany(Exam: ordrs): Observable<ordrs> {
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(Exam);
    console.log(body);
    return this.http.post<ordrs>(this.baseUrl, body, { 'headers': headers });
  }


// affichage 
  getdata(): Observable<ordrs[]> {
    return this.http.get<ordrs[]>(this.baseUrl);

  }
 
  // efface Methode
  deleteExam(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }
}