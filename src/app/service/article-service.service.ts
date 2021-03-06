import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpEvent, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { Article } from 'app/model/article.model';
import { FileDBTrip } from 'app/model/file-dbtrip.model';
import { Categorie } from 'app/model/categorie';
import{Subject}from'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleServiceService {

  getArticleUrl="/api/article/get-all-article";
  addarticleUrl="/api/article/add-article";
  uploadfilef="/api/FileTrip/uploadf";
  getfiledetail="/api/FileTrip/filesdetail";
  getArticleBygategorieurl="/api/article/get-article-by-categorie";
  getArticleByunivergaconsoledujeuurl="/api/article/get-article-by-categorie"

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
          affichArticlebycategorieUnivers_Gamingconsoledujeu() : Observable<Article[]> {
            return this.http.get<Article[]>("/api/article/get-article-by-categorie-ET-Type/Univers_Gaming/Console_de_jeux");
            }
            affichArticlebycategorieUnivers_Gamingcomposantpcgaming() : Observable<Article[]> {
              return this.http.get<Article[]>("/api/article/get-article-by-categorie-ET-Type/Univers_Gaming/Composant_PC_Gaming");
              }
              affichArticlebycategorieUnivers_Gamingpcportable() : Observable<Article[]> {
                return this.http.get<Article[]>("/api/article/get-article-by-categorie-ET-Type/Univers_Gaming/Pc_Portable");
                }
                affichArticlebycategorieUnivers_Gamingprephpcgaming() : Observable<Article[]> {
                  return this.http.get<Article[]>("/api/article/get-article-by-categorie-ET-Type/Univers_Gaming/Pereph??rique_pc_gaming");
                  }
                  affichArticlebycategorieUnivers_Gamingunitegaming() : Observable<Article[]> {
                    return this.http.get<Article[]>("/api/article/get-article-by-categorie-ET-Type/Univers_Gaming/Unit??_Gaming");
                    }
      affichArticlebycategorieUniversInformatiquetablette() : Observable<Article[]> {
             return this.http.get<Article[]>("/api/article/get-article-by-categorie-ET-Type/Univers_Informatique/Tablette");
      }
        affichArticlebycategorieUniversInformatiquepcportable() : Observable<Article[]> {
          return this.http.get<Article[]>("/api/article/get-article-by-categorie-ET-Type/Univers_Informatique/PC_Portable");
        }
          affichArticlebycategorieUniversInformatiquepcbureau() : Observable<Article[]> {
            return this.http.get<Article[]>("/api/article/get-article-by-categorie-ET-Type/Univers_Informatique/Pc_De_Bureau");
          }
            affichArticlebycategorieUniversInformatiqueperfetaccesstock() : Observable<Article[]> {
              return this.http.get<Article[]>("/api/article/get-article-by-categorie-ET-Type/Univers_Informatique/P??r??ph??rique_et_Accessoire_Stockage");
            }
              affichArticlebycategorieUniversInformatiquecompetmaint() : Observable<Article[]> {
                return this.http.get<Article[]>("/api/article/get-article-by-categorie-ET-Type/Univers_Informatique/Composant_et_maintenance");
              }
   affichArticlebycategorieUniverstelefoniquesmartphone() : Observable<Article[]> {
     return this.http.get<Article[]>("/api/article/get-article-by-categorie-ET-Type/Univers_Telephonie/Smartphone");
    }
    affichArticlebycategorieUniverstelefoniqueapple() : Observable<Article[]> {
      return this.http.get<Article[]>("/api/article/get-article-by-categorie-ET-Type/Univers_Telephonie/Apple");
     }
     affichArticlebycategorieUniverstelefoniqueGSM() : Observable<Article[]> {
      return this.http.get<Article[]>("/api/article/get-article-by-categorie-ET-Type/Univers_Telephonie/GSM");
     }
     affichArticlebycategorieUniverstelefoniqueT??l??phone_fixe() : Observable<Article[]> {
      return this.http.get<Article[]>("/api/article/get-article-by-categorie-ET-Type/Univers_Telephonie/T??l??phone_fixe");
     }
     affichArticlebycategorieUniverstelefoniqueAccessoir_telephoniies() : Observable<Article[]> {
      return this.http.get<Article[]>("/api/article/get-article-by-categorie-ET-Type/Univers_Telephonie/Accessoir_telephoniies");
     }
     affichArticlebycategorieUniverstelefoniquesmartwatch() : Observable<Article[]> {
      return this.http.get<Article[]>("/api/article/get-article-by-categorie-ET-Type/Univers_Telephonie/Smartwatch");
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

    cartSubject = new Subject<any>();

}
