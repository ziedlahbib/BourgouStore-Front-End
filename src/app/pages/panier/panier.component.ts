import { Component, OnInit } from '@angular/core';
import { Article } from 'app/model/article.model';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss']
})
export class PanierComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.cartItemFunc();
  }
  cartItem:Article[];
  cartItemFunc(){
      if(localStorage.getItem('localCart')!=null){
          var cartCount=JSON.parse(localStorage.getItem('localCart'));
          this.cartItem=cartCount;
          console.log('localstorage',cartCount.length);
          console.log('localstorage',this.cartItem)
          
  }else{
      this.cartItem=[];
  }
}

}
