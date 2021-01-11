import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public data = [];
  constructor(private dbService: DatabaseService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
  /*  this.data = [
      {id:1, title: 'Space X Fırlatıldı', description: 'Elon Musk yeni Falcon 5 roketini bugün fırlatıyor.', image: "https://media.gettyimages.com/photos/the-spacex-falcon-heavy-rocket-sits-on-launch-pad-39a-at-kennedy-as-picture-id914642586?s=612x612"},
      {id:2, title: 'Angular 10 tanıtıldı!', description: 'Google yaptığı lansmanla Angular 10`u tanıttı', image: "https://cdn.iconscout.com/icon/free/png-256/angular-2752246-2285063.png"}
    ];*/

  this.dbService.getHomeData().subscribe(a => {
    this.data = a;
  })
  }
}
