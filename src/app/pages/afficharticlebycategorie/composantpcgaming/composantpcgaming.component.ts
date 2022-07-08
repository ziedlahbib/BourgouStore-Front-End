import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Article } from 'app/model/article.model';
import { ArticleServiceService } from 'app/service/article-service.service';
import { PageEvent } from '@angular/material/paginator';
import { Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-composantpcgaming',
  templateUrl: './composantpcgaming.component.html',
  styleUrls: ['./composantpcgaming.component.scss']
})
export class ComposantpcgamingComponent implements OnInit {

  showFiller = false;
  listofarticle:Article[];
  nbr:Number;
  listofarticlesPagination :Article[];
  listofarticlesearch:Article[]
  start=0;
  end=6;
  constructor(private articleservice:ArticleServiceService,private router:Router) { }

  ngOnInit(): void {
    this.articleservice.affichArticlebycategorieUnivers_Gamingcomposantpcgaming().subscribe(
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
  itemsCart:Article[]=[];
addtoCart(article:Article){
  this.itemsCart.push(article);
  console.log("sss",this.itemsCart)
  localStorage.setItem('localCart',JSON.stringify(this.itemsCart));
  this.cartNumberFunc();
}
cartNumber:number=0;
cartNumberFunc(){
  var cartValue=JSON.parse(localStorage.getItem('localCart'));
  this.cartNumber=cartValue.length;
  console.log(this.cartNumber);
  this.articleservice.cartSubject.next(this.cartNumber);
}
}
