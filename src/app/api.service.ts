import { Injectable, ErrorHandler } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { HttpErrorResponse } from '@angular/common/http';
import { Book } from './book';
@Injectable({
  providedIn: 'root'
})
export class ApiService implements ErrorHandler{

	private dbPath = '/data';
	bookRef : AngularFireList<Book> = null;

  	constructor(private db: AngularFireDatabase) {
  		this.bookRef = db.list(this.dbPath);
  	}

  	createRegister(register : Book) : void{
  		this.bookRef.push(register);
  	}

  	handleError(error : any){
  		if(error instanceof HttpErrorResponse){
  			console.error('Backend returned status code : ', error.status);
  			console.error('Response body : ', error.message);
  		}else{
  			console.log('An error occurred : ', error.message);
  		}
  	}
}
