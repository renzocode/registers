import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { ApiService } from '../api.service';
import { Book } from '../book';

@Component({
  selector: 'app-book-register',
  templateUrl: './book-register.component.html',
  styleUrls: ['./book-register.component.css']
})
export class BookRegisterComponent {

  model : Book = new Book();
  submitted = false;

  constructor(private BookService : ApiService){

  }

	notation3 = ['GRÚA DANIELI (L16A)', 'GRÚA DANIELI (L10A)',
            'GRÚA E', 'GRÚA E2', 'GRÚA L18', 'GRÚA L19 -PORTICO', 'GRÚA JASO', 'GRÚA E1', 'GRÚA D', 'GRÚA P'];


  newBookRegister() : void{
    setTimeout(() => {
      this.submitted = false;
      this.model = new Book();
    }, 10000);
    location.reload(false);
  }

  save(){
    this.BookService.createRegister(this.model);

    //this.model = new Book();
  }

  onSubmit() { 
    this.submitted = true; 
    this.save();
  }




}
