import { Component, OnInit } from '@angular/core';
import { Article } from 'app/model/article.model';
import { MatDialog } from '@angular/material/dialog';

import { PassercommandedialogComponent } from '../passercommandedialog/passercommandedialog.component';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss']
})
export class PanierComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

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
dialoggg(){
  const dialogRef = this.dialog.open(PassercommandedialogComponent, {
    data: {
        title: "NWAS NTD"
    },
    width: '600px',
    height: '300px',
    panelClass: 'epsSelectorPanel'
});
  dialogRef.updatePosition({ top: '170px', left: '500px' });
  dialogRef.afterClosed().subscribe(data => {

  });
}
}
