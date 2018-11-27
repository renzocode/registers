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


	notation3 = ['GRÚA DANIELI (L16A)', 'GRÚA DANIELI (L10A)',
            'GRÚA E', 'GRÚA E2', 'GRÚA L18', 'GRÚA L19 -PORTICO', 'GRÚA JASO', 'GRÚA E1', 'GRÚA D', 'GRÚA P'];




  	submitted = false;


  	model = new Book("", "", "", "", "", "");

  	onSubmit() { this.submitted = true; }


}
