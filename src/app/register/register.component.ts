import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  
  public loginForm: FormGroup;
  public error: string = null;

  constructor(private formBuilder: FormBuilder, private auth: AuthService, private router: Router) {
    this.loginForm = formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
   }

  ngOnInit(): void {
 
  }

  Register(){
    this.error = null;
    const values:any = this.loginForm.value;
    this.auth.EmailRegister(values.email, values.password).then( data => {
      if(data.user){
        this.router.navigate(['/home']);
      }else{
        this.error = data.message;
      }
    })
  }

}
