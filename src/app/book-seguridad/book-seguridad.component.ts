import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray, ValidatorFn } from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { ApiseguridadService } from '../apiseguridad.service';
import { Security } from '../security';
@Component({
  selector: 'app-book-seguridad',
  templateUrl: './book-seguridad.component.html',
  styleUrls: ['./book-seguridad.component.css']
})
export class BookSeguridadComponent {

	form : FormGroup;
  /*
	orders = [
		{ id : 1, name : 'DE LA CRUZ ALVA MIGUEL ANGEL' },
		{ id : 2, name : 'MONTOYA SANTOS OBDULIO FELIX' },
		{ id : 3, name : 'SOLORZANO LOPEZ MAXIMO NUMBAB' },
		{ id : 4, name : 'SAENZ DURAN FERMIN BENJAMIN' },
		{ id : 5, name : 'ALDAVE RAMIREZ ALWIN WILDER' },
		{ id : 6, name : 'ASIAN SPARROW JOSE LUIS'},
		{ id : 7, name : 'SANDOVAL SANTAMARIA ASRAEL FRANCISCO'},
		{ id : 8, name : 'VASQUEZ JUGO EDILBERTO CARLOS'},
		{ id : 9, name : 'URBINA LAZO EFRAIN SANTOS'},
		{ id : 10, name : 'MORALES CACERES HECTOR HERMES'},
		{ id : 11, name : 'QUEZADA ESCALANTE EDY CELSO'},
		{ id : 12, name : 'LUJAN CRUZ MARCIAL PROSPERO'},
		{ id : 13, name : 'VICTORIO PEREZ NICANOR JESUS'},
		{ id : 14, name : 'CRUZ RODRIGUEZ DANTE ALDO'},
		{ id : 15, name : 'RURUSH MATOS OSCAR ALBERTO'},
		{ id : 16, name : 'AVALOS PEREZ CARLOS MANUEL'},
		{ id : 17, name : 'AGUILAR GONZALEZ HILARIO LUIS'},
		{ id : 18, name : 'AGURTO CRIBILLERO SEBERINO PEPE'},
		{ id : 19, name : 'BRAVO CABELLO TITO ARMANDO'},
		{ id : 20, name : 'CHAVEZ RAMIREZ JORGE ANTONIO'},
		{ id : 21, name : 'LOPEZ LESCANO PEDRO JAVIER'},
		{ id : 22, name : 'CAPURRO MARTINEZ JOAN DAYTON'}

	];
  */
  orders1 = [ 
    'DE LA CRUZ ALVA MIGUEL ANGEL',
    'MONTOYA SANTOS OBDULIO FELIX',
    'SOLORZANO LOPEZ MAXIMO NUMBAB',
    'SAENZ DURAN FERMIN BENJAMIN',
    'ALDAVE RAMIREZ ALWIN WILDER',
    'ASIAN SPARROW JOSE LUIS',
    'SANDOVAL SANTAMARIA ASRAEL FRANCISCO',
    'VASQUEZ JUGO EDILBERTO CARLOS',
    'URBINA LAZO EFRAIN SANTOS',
    'MORALES CACERES HECTOR HERMES',
    'QUEZADA ESCALANTE EDY CELSO',
    'LUJAN CRUZ MARCIAL PROSPERO',
    'VICTORIO PEREZ NICANOR JESUS',
    'CRUZ RODRIGUEZ DANTE ALDO',
    'RURUSH MATOS OSCAR ALBERTO',
    'AVALOS PEREZ CARLOS MANUEL',
    'AGUILAR GONZALEZ HILARIO LUIS',
    'AGURTO CRIBILLERO SEBERINO PEPE',
    'BRAVO CABELLO TITO ARMANDO',
    'CHAVEZ RAMIREZ JORGE ANTONIO',
    'LOPEZ LESCANO PEDRO JAVIER',
    'CAPURRO MARTINEZ JOAN DAYTON'
  ];

  /*notation3 = ['GRÚA DANIELI (L16A)', 'GRÚA DANIELI (L10A)',
            'GRÚA E', 'GRÚA E2', 'GRÚA L18', 'GRÚA L19 -PORTICO', 'GRÚA JASO', 'GRÚA E1', 'GRÚA D', 'GRÚA P'];*/
  multiplayers = ['JORGE MEDINA', 'ALEJANDRO SOLORZANO', 'PERCY CAPRISTAN'];

  events = ['CONDICION', 'ACTO'];

 	model : Security = new Security();
  submitted = false;

  today : Date = new Date();

  constructor(private BookService : ApiseguridadService, private formBuilder: FormBuilder){

  	//const controls = this.orders.map(c => new FormControl(false));
  	//console.log(controls[0].setValue(true));

   // 	this.form = this.formBuilder.group({
  //	orders: new FormArray(controls)
 		//});   
  }

	


  	newBookRegister() : void{
    	setTimeout(() => {
      		this.submitted = false;
      		this.model = new Security();
    	}, 10000);
    	location.reload(false);
  	}

  	save(){
      this.model.date = this.today.getMonth() + '/' + this.today.getDate() +'/'+ this.today.getFullYear() + 
      ' '+ this.today.getHours() + ':' + this.today.getMinutes() + ':' + this.today.getSeconds();
    	this.BookService.createRegister(this.model);

    	//this.model = new Book();
  	}

  	onSubmit() { 
    	this.submitted = true;
    	this.save();

    	//const selectedOrderIds = this.form.value.orders.map((v , i) => v ? this.orders[i].id : null).filter(v => v !== null);
    	//console.log(selectedOrderIds);
  	}
}
