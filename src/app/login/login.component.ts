import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { DatabaseService } from '../services/database.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public error:boolean = false;
  constructor( public formBuilder: FormBuilder, private db: DatabaseService) { 

    this.loginForm = formBuilder.group({
      mail: ['', [Validators.required,Validators.email]],
      password: ['', Validators.required],
    });

  }

  ngOnInit(): void {
  }

  Login(){
    this.error = false;
    const values = {
      ...this.loginForm.value
    }
    
    this.db.Login(values).subscribe( data => {
      
      if(data?.length > 0){
        this.error = false;
        console.log('Giriş Başarılı',data[0])
      }else{
        this.error = true;
      }

    })
    
  }

}
