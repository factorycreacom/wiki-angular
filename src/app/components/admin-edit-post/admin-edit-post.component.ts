import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DatabaseService } from 'src/app/services/database.service';
import { AdminService } from 'src/app/admin/admin.service';

@Component({
  selector: 'app-admin-edit-post',
  templateUrl: './admin-edit-post.component.html',
  styleUrls: ['./admin-edit-post.component.scss']
})
export class AdminEditPostComponent implements OnInit {
  public dataForm: FormGroup;
  @Input('defaultData') defaultData:any;
  private id:any;
  constructor(private fb: FormBuilder, private db: DatabaseService, private adminService: AdminService ) { 
    this.dataForm = fb.group({
      title: ["", Validators.required],
      description: ["", Validators.required],
      image: ["", Validators.required]
    })
  }

  ngOnInit(): void {
    this.dataForm.patchValue({title: this.defaultData.payload.doc.data().title})
    this.dataForm.patchValue({description: this.defaultData.payload.doc.data().description})
    this.dataForm.patchValue({image: this.defaultData.payload.doc.data().image})

    this.id = this.defaultData.payload.doc.id;
  }

  Save(){
    this.db.AdminPostEdit(this.dataForm.value, this.id).then( data => {
        this.adminService.currentPage = 'dashboard';
    })
  }

}
