import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header-account',
  templateUrl: './header-account.component.html',
  styleUrls: ['./header-account.component.scss']
})
export class HeaderAccountComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit(): void {
  }

  Logout(){
    this.auth.Logout();
  }

}
