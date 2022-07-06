import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpEvent, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { Article } from 'app/model/article.model';
import { FileDBTrip } from 'app/model/file-dbtrip.model';
import { Categorie } from 'app/model/categorie';

@Injectable({
  providedIn: 'root'
})
export class ArticleServiceService {

  getArticleUrl="/api/article/get-all-article";
  addarticleUrl="/api/article/add-article";
  uploadfilef="/api/FileTrip/uploadf";
  getfiledetail="/api/FileTrip/filesdetail";
  getArticleBygategorieurl="/api/article/get-article-by-categorie"

  constructor(private http : HttpClient) { }

  affichArticle() : Observable<Article[]> {
    return this.http.get<Article[]>(this.getArticleUrl);
    }
    affichArticlebycategorieUnivers_Gaming() : Observable<Article[]> {
      return this.http.get<Article[]>(`${this.getArticleBygategorieurl}/Univers_Gaming`);
      }
      affichArticlebycategorieUnivers_Informatique() : Observable<Article[]> {
        return this.http.get<Article[]>(`${this.getArticleBygategorieurl}/Univers_Informatique`);
        }
        affichArticlebycategorieUnivers_Telephonie() : Observable<Article[]> {
          return this.http.get<Article[]>(`${this.getArticleBygategorieurl}/Univers_Telephonie`);
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
      return this.http.put<Article>("/api/FileTrip/affecter-fileToArticle/"+id+"/"+idf,article);
    }
}
