import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

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
  constructor(public dialogRef: MatDialogRef<PassercommandedialogComponent>) { }

  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
