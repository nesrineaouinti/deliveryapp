import { Injectable } from '@angular/core';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import {deliverycompany} from './../models/Deliverycompany';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpEvent, HttpUserEvent, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Deliverycompany {

  private baseUrl: string = "http://localhost:3000/deliverycompany";
  

  httpOptions =
  {
    headers: new HttpHeaders({
      'Content-Type': 'application/Json'
    })
  }
  constructor(private http: HttpClient) { }

  // ajouter phone

  addDeliverycompany(Exam: deliverycompany): Observable<deliverycompany> {
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(Exam);
    console.log(body);
    return this.http.post<deliverycompany>(this.baseUrl, body, { 'headers': headers });
  }


// affichage 
  getdata(): Observable<deliverycompany[]> {
    return this.http.get<deliverycompany[]>(this.baseUrl);

  }
 
  // efface Methode
  deleteExam(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }



}
