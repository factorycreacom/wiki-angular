import { Injectable } from '@angular/core';
import { AngularFireAuth } from  "@angular/fire/auth";
import { Router } from  "@angular/router";
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user: any = [];
  public isLoggedIn: boolean = false;
  constructor(public afAuth: AngularFireAuth) { 

    this.afAuth.authState.subscribe( user => {
      if(user){
        this.user = user;
        this.isLoggedIn = true;
        console.log('Oturum Açmış', user.email);
      }else{
        this.isLoggedIn = false;
        console.log('Oturum Açılmamış');
      }
    })
  }

   async EmailLogin(email: string, password: string) {
    return  this.afAuth.signInWithEmailAndPassword(email,password).then( data =>{
      console.log('Gelen veri', data);
      return data;
    }).catch( err => {
      return false;
    })
  }

  async EmailRegister(email: string, password: string){
    return this.afAuth.createUserWithEmailAndPassword(email, password).then( data => {
      console.log('ÜYE OLDU', data);
      return data;
    }).catch( err => {
      return err;
    })
  }

  async Logout() {
    const logout:any = await this.afAuth.signOut();
    console.log('LOGOUT', logout)
    if(logout){
        this.isLoggedIn = false;
        this.user = [];
    }
  }
}
