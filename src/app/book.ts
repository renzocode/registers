export interface BookInterface {

	notation1 : string;
	notation2 : string;
	notation3 : string;
	notation4 : string;
	notation5 : string;
	notation6 : File;

}

export class Book implements BookInterface{
	notation1 : string = null;
	notation2 : string = null;
	notation3 : string = null;
	notation4 : string = null;
	notation5 : string = null;
	notation6 : File = null;
}
