import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './../api.service';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

const EXCEL_TYPE =  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  	items : any;

  	constructor(private BookService : ApiService) { 
  	//BookService.getList();
  		BookService.getList().subscribe(data => {
  			this.items = data;
  			console.log(this.items);
  	});

  	}

    exportAsExcelFile(json : any[], excelFileName: string): void{
      let worksheet : XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
      let workbook : XLSX.WorkBook = {Sheets: {'data': worksheet}, SheetNames: ['data']};
      let excelBuffer : any = XLSX.write(workbook, { bookType : 'xlsx', type : 'array'});
      this.saveAsExcelFile(excelBuffer, excelFileName);
    }

    saveAsExcelFile(buffer: any, fileName: string): void{
      let data : Blob = new Blob([buffer], {type: EXCEL_TYPE});
      FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
    }

    exportAsXLSX() : void{
      this.exportAsExcelFile(this.items, 'sample');
    }

  	ngOnInit() {
  	}

}
