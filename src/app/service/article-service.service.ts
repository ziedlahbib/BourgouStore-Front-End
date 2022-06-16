import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpEvent, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { Article } from 'app/model/article.model';
import { FileDBTrip } from 'app/model/file-dbtrip.model';

@Injectable({
  providedIn: 'root'
})
export class ArticleServiceService {

  getArticleUrl="/api/article/get-all-article";
  addarticleUrl="/api/article/add-article";
  uploadfilef="/api/FileTrip/uploadf";
  getfiledetail="/api/FileTrip/filesdetail";

  constructor(private http : HttpClient) { }

  affichArticle() : Observable<Article[]> {
    return this.http.get<Article[]>(this.getArticleUrl);
    }
    ajoutArticle(article :Article): Observable<Article>{
      return this.http.post<Article>(`${this.addarticleUrl}`,article);
    }
    upload(file: File): Observable<HttpEvent<any>> {
      const formData: FormData = new FormData();
      formData.append('file', file);
      const req = new HttpRequest('POST', `${this.uploadfilef}`, formData, {
        reportProgress: true,
        responseType: 'json'
      });
     
      return this.http.request(req);   
    }
    getFilesdetail(id:number): Observable<FileDBTrip> {
      return this.http.get<FileDBTrip>(`${this.getfiledetail}/${id}`);
    }
    affecterfileauarticle(id:String,idf:number,article :Article):Observable<Article>{
      return this.http.put<Article>("/api/FileTrip/affecter-fileToArticlep/"+id+"/"+idf,article);
    }
}
