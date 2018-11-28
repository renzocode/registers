import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { ApiseguridadService } from '../apiseguridad.service';
import { Book } from '../book';
@Component({
  selector: 'app-book-seguridad',
  templateUrl: './book-seguridad.component.html',
  styleUrls: ['./book-seguridad.component.css']
})
export class BookSeguridadComponent {

 model : Book = new Book();
  submitted = false;

  constructor(private BookService : ApiseguridadService){

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
