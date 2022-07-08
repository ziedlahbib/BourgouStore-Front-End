import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-passercommandedialog',
  templateUrl: './passercommandedialog.component.html',
  styleUrls: ['./passercommandedialog.component.scss']
})
export class PassercommandedialogComponent implements OnInit {
  nom:String;
  prenom:String;
  address:String;
  email:String;
  tel:String;
  constructor() { }

  ngOnInit(): void {
  }

}
