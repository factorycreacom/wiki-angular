import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  public adminData = {
    mail: null,
    status: 0
  }
  currentPage: string = "dashboard";
  public isAuthenticated: boolean = false;

  constructor() { }
}
