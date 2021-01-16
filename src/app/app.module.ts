import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ItemComponent } from './components/item/item.component';
import { HomeComponent } from './home/home.component';
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { environment } from 'src/environments/environment';
import { LoginComponent } from './login/login.component';
import {ReactiveFormsModule} from '@angular/forms';
import { HeaderAccountComponent } from './components/header-account/header-account.component';
import { RegisterComponent } from './register/register.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AdminHeaderComponent } from './components/admin-header/admin-header.component';
import { AdminDashTableComponent } from './components/admin-dash-table/admin-dash-table.component';
import { AdminAddPostComponent } from './components/admin-add-post/admin-add-post.component';
import { AdminEditPostComponent } from './components/admin-edit-post/admin-edit-post.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ItemComponent,
    HomeComponent,
    LoginComponent,
    HeaderAccountComponent,
    RegisterComponent,
    AdminLoginComponent,
    AdminDashboardComponent,
    AdminHeaderComponent,
    AdminDashTableComponent,
    AdminAddPostComponent,
    AdminEditPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
