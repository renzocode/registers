import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookRegisterComponent } from './book-register/book-register.component';


const appRoutes: Routes = [
  {
    path: 'book-register',
    component : BookRegisterComponent,
    data :{ title: 'Book List'}
  },
  {
    path : '',
    redirectTo: '/book-register',
    pathMatch : 'full'
  }
];



@NgModule({
  declarations: [
    AppComponent,
    BookRegisterComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    BrowserModule,
    AngularFireDatabaseModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
