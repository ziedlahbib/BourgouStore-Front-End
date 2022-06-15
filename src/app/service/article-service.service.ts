import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpEvent, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticleServiceService {

  gettripsUrl="/api/article/get-all-article";

  constructor(private http : HttpClient) { }
}
