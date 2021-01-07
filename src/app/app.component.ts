import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'newProje';
  public data = [];

  constructor(){
    console.log('Çalıştım ben')
    this.title = "yeni site";
    this.getData();
  }

  getData(){
    this.data = [
      {id:1, title: 'Space X Fırlatıldı', description: 'Elon Musk yeni Falcon 5 roketini bugün fırlatıyor.', image: "https://media.gettyimages.com/photos/the-spacex-falcon-heavy-rocket-sits-on-launch-pad-39a-at-kennedy-as-picture-id914642586?s=612x612"},
      {id:2, title: 'Angular 10 tanıtıldı!', description: 'Google yaptığı lansmanla Angular 10`u tanıttı', image: "https://cdn.iconscout.com/icon/free/png-256/angular-2752246-2285063.png"}
    ];
  }
}
