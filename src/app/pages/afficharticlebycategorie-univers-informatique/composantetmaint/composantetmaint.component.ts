import { Component, OnInit } from '@angular/core';
import { Article } from 'app/model/article.model';
import { Input } from '@angular/core';
import { ArticleServiceService } from 'app/service/article-service.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-composantetmaint',
  templateUrl: './composantetmaint.component.html',
  styleUrls: ['./composantetmaint.component.scss']
})
export class ComposantetmaintComponent implements OnInit {

  listofarticle:Article[];
  nbr:Number;
  @Input()  articlepourachet:Article[]=[];
  listofarticlesPagination :Article[];
  listofarticlesearch:Article[]
  start=0;
  end=6;
  constructor(private articleservice:ArticleServiceService) { }

  ngOnInit(): void {
    this.articleservice.affichArticlebycategorieUniversInformatiquecompetmaint().subscribe(
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
  }
}
