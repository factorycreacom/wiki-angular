import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';
import { AdminService } from 'src/app/admin/admin.service';


@Component({
  selector: 'app-admin-dash-table',
  templateUrl: './admin-dash-table.component.html',
  styleUrls: ['./admin-dash-table.component.scss']
})
export class AdminDashTableComponent implements OnInit {

  constructor(private db: DatabaseService, private adminService: AdminService) { }

  public data:any = [];
 @Output() action = new EventEmitter();
  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.db.getAdminWikiData().subscribe( data => {
      this.data = data;
      console.log(this.data);
    });
  }

  updateItem(item){
    this.adminService.currentPage = 'edit';
    this.action.emit(item);
  }

  deleteItem(item){
    this.db.AdminDeleteWiki(item);
  }

}
