import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public data = [];

  constructor(private db: DatabaseService){
    this.getData();
  } 

  ngOnInit(){}

  getData(){
    this.db.getWikiData().subscribe( data => {
      this.data = data;
    });
  }

  
}
