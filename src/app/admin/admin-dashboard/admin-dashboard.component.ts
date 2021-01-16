import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  editData: any;
  constructor(public adminService: AdminService) { }

  ngOnInit(): void {
  }

  Updater(event){
    this.editData = event;
    console.log('DASHBOARDDAKİ',this.editData)
  }

}
