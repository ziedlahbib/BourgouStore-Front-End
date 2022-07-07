import { Component, OnInit, ElementRef, AfterContentInit } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router } from '@angular/router';
import { Input } from '@angular/core';
import { Article } from 'app/model/article.model';
import { ArticleServiceService } from 'app/service/article-service.service';


@Component({
    selector: 'app-navbar-front',
    templateUrl: './navbar-front.component.html',
    styleUrls: ['./navbar-front.component.scss']
})
export class NavbarFrontComponent implements OnInit {

  //articlepourachet:Article[]=[];
  //nbr:number;
  
    constructor(private artticleservice:ArticleServiceService) {
        this.artticleservice.cartSubject.subscribe(
            (data)=>{
                this.cartItem=data;
            }
        );
    }

   
    ngOnInit() {
        this.cartItemFunc();

    }
    /*
    addArticle(newArticle:Article){
        this.articlepourachet.push(newArticle);
        this.nbr=this.articlepourachet.length;
    }
    */
    cartItem:number;
    cartItemFunc(){
        if(localStorage.getItem('localCart')!=null){
            var cartCount=JSON.parse(localStorage.getItem('localCart'));
            this.cartItem=cartCount.length;
            console.log('localstorage',cartCount.length);
            console.log('localstorage',this.cartItem)
            
    }else{
        this.cartItem=0;
    }
}
}
