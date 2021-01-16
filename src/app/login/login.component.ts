import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

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

  Login(){
    this.error = null;
    const values = this.loginForm.value;

    this.auth.EmailLogin(values.email, values.password).then( (data:any) => {
      if(!data){
        this.error="Kullanıcı bilgileriniz yanlış!"
      }else{
        console.log('Kullanıcıöız',data.user.email);
        this.router.navigate(['/home']);
      }
      console.log('DATA2', data)
    }).catch( err => {
      this.error="Kullanıcı bilgileriniz yanlış!"
    })
  }

}
