import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DatabaseService } from 'src/app/services/database.service';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/admin/admin.service';

@Component({
  selector: 'app-admin-add-post',
  templateUrl: './admin-add-post.component.html',
  styleUrls: ['./admin-add-post.component.scss']
})
export class AdminAddPostComponent implements OnInit {
  public dataForm: FormGroup;
  
  constructor(private fb: FormBuilder, private db: DatabaseService, private adminService: AdminService) {
    this.dataForm = fb.group({
      title: ["", Validators.required],
      description: ["", Validators.required],
      image: ["", Validators.required]
    })
   }

  ngOnInit(): void {
  }
  
  Save(){
    console.log(this.dataForm.value);
    this.db.AdminPostSave(this.dataForm.value).then( data => {
      this.adminService.currentPage = "dashboard";
    })
  }
}
