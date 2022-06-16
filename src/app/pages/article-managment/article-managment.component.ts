import { Component, OnInit } from '@angular/core';
import { ViewChild} from '@angular/core';;
import {MatSort, SortDirection} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatChipsModule } from '@angular/material/chips';
import { Article } from 'app/model/article.model';
import { FileDBTrip } from 'app/model/file-dbtrip.model';
import { ArticleServiceService } from 'app/service/article-service.service';

@Component({
  selector: 'app-article-managment',
  templateUrl: './article-managment.component.html',
  styleUrls: ['./article-managment.component.scss']
})
export class ArticleManagmentComponent implements OnInit {

  listofarticles:Article[];
  fileById:FileDBTrip[];
  imageSource:String;
  counters = [100, 200, 10];
  meilleurDestination:any;
  displayedColumns = ['image','description', 'categorie', 'type','name','prix','option'];
  dataSource: MatTableDataSource<Article>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private articleserveice:ArticleServiceService) { }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  ngOnInit(): void {
    this.articleserveice.affichArticle().subscribe(
      data=>{
        this.listofarticles=data;
        this.dataSource=new MatTableDataSource(this.listofarticles);
        this.dataSource._renderChangesSubscription;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    )
  }

}
