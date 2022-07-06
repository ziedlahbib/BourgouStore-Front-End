import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Article } from 'app/model/article.model';
import { ArticleServiceService } from 'app/service/article-service.service';
import { PageEvent } from '@angular/material/paginator';
import { Input } from '@angular/core';

@Component({
  selector: 'app-afficharticlebycategorie',
  templateUrl: './afficharticlebycategorie.component.html',
  styleUrls: ['./afficharticlebycategorie.component.scss']
})
export class AfficharticlebycategorieComponent implements OnInit {

  listofarticle:Article[];
  nbr:Number;
  listofarticlesPagination :Article[];
  listofarticlesearch:Article[]
  start=0;
  end=6;
  //@Output() newArticleEvent =new EventEmitter<Article>();
  //Univers_Gaming:String="Univers_Gaming";
  constructor(private articleservice:ArticleServiceService) { }

  ngOnInit(): void {
    this.articleservice.affichArticlebycategorieUnivers_Gaming().subscribe(
      data=>{
        console.log(data);
        this.listofarticle=data;
        this.listofarticlesPagination=this.listofarticle.slice(this.start, this.end)
      }
    )

  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.toUpperCase(); // Datasource defaults to lowercase matches
    /*
    this.tripservice.gettripbydestination(filterValue).subscribe(
      data=>{
        this.listoftripsearch=data;
        this.listoftripsPagination=this.listoftripsearch.slice(this.start, this.end)
      }
    )*/
  }
  paginate(event: PageEvent) {
    let startIndex = event.pageSize * event.pageIndex;
    this.start = startIndex;
    let endIndex = startIndex + event.pageSize;
    this.end = endIndex;
    if (endIndex > this.listofarticle.length) {
      endIndex = this.listofarticle.length;
    }
    this.listofarticlesPagination = this.listofarticle.slice(startIndex, endIndex);
  }/*
  addnewArticle(value:Article){
    this.newArticleEvent.emit(value);
  }
*/
}
