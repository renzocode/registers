import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';



import { Book } from '../book';

@Component({
  selector: 'app-book-register',
  templateUrl: './book-register.component.html',
  styleUrls: ['./book-register.component.css']
})
export class BookRegisterComponent {
	items: any[];
	constructor(db : AngularFireDatabase){
		const listRef = db.list('/data').valueChanges().subscribe(data =>{
			this.items = data;
			console.log(this.items);
			}
		);
		
	}


	notation3 = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];

  	submitted = false;


  	model = new Book("s", "s", "t", "u", "a", "j");

  	onSubmit() { this.submitted = true; }


}
