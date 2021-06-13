import { Injectable } from '@angular/core';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import {Exam} from './../models/Marketplace';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpEvent, HttpUserEvent, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private baseUrl: string = "http://localhost:3000/marketplace";
  

  httpOptions =
  {
    headers: new HttpHeaders({
      'Content-Type': 'application/Json'
    })
  }
  constructor(private http: HttpClient) { }

  // ajouter phone

  addExam(Exam: Exam): Observable<Exam> {
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(Exam);
    console.log(body);
    return this.http.post<Exam>(this.baseUrl, body, { 'headers': headers });
  }


// affichage 
  getdataa(): Observable<Exam[]> {
    return this.http.get<Exam[]>(this.baseUrl);

  }
 
  // efface Methode
  deleteExam(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }



}

