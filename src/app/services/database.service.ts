import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private fireStore: AngularFirestore) { }

  getWikiData(){
    return this.fireStore.collection("wiki").valueChanges();
  }

  getAdminWikiData(){
    return this.fireStore.collection("wiki").snapshotChanges();
  }

  AdminLogin(values:any){
    return this.fireStore.collection("Admins",
    ref => ref.where('mail', '==', values.mail).where('password', '==', values.password).limit(1)).valueChanges();
  }

  AdminDeleteWiki(item:any){
      return this.fireStore.collection("wiki").doc(item.payload.doc.id).delete();
  }

  AdminPostSave(item:any){
    return this.fireStore.collection("wiki").add(item).then( data => {
      return data;
    }).catch( (err) => {
      console.log(err);
    })
  }

  AdminPostEdit(item:any, id:any){
    return this.fireStore.collection("wiki").doc(id).set(item, {merge: true}).then( data => {
      console.log('DATA',data)
      return data;
    }).catch( (error) => {
      console.log('HATA', error)
    })
  }
}
