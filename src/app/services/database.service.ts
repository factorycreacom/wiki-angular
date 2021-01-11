import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private firestore: AngularFirestore) { 

  }

  getHomeData(){
    return this.firestore.collection('wiki').valueChanges();
  }

  Login(values:any){
    return this.firestore.collection('Users', ref => ref.where('mail', '==', values.mail).where('password', '==', values.password).limit(1)).valueChanges();
  }


}
