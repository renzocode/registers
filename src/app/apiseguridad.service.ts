import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { HttpErrorResponse } from '@angular/common/http';
import { Security } from './security';

@Injectable({
  providedIn: 'root'
})
export class ApiseguridadService {

	private dbPath = '/data/securitypage';


	bookRef : AngularFireList<Security> = null;

  	constructor(private db: AngularFireDatabase) {
  		this.bookRef = db.list(this.dbPath);
  	}

  	createRegister(register : Security) : void{
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
