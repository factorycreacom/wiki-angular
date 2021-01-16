import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/services/database.service';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {
  public loginForm: FormGroup;
  public error: boolean = false;
  constructor(private formBuilder: FormBuilder, private router: Router, private db: DatabaseService, public adminService: AdminService) { 
    this.loginForm = formBuilder.group({
      mail: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  Login(){
    const values = {
      ...this.loginForm.value
    }
    this.db.AdminLogin(values).subscribe( data => {
      
      if(data?.length > 0){
        this.error = false;
        const user:any = data[0];
        this.adminService.adminData.mail = user.mail;
        this.adminService.adminData.status = user.status;
        this.adminService.isAuthenticated = true;

        this.router.navigate(['/admin/dashboard'])

      }else{
        this.error = true;
      }

    })
  }

}
