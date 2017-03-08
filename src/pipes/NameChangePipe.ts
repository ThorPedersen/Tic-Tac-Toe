import { Injectable, Pipe, PipeTransform } from '@angular/core';

/*
  Generated class for the NameChangePipe pipe.

  See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
  Angular 2 Pipes.
*/
@Pipe({
  name: 'NameChangePipe'
})
@Injectable()
export class NameChangePipe implements PipeTransform {

  transform(value:string):string {

    //Creates 2 strings to put values into
    let lowerCaseString: string = "";
    let UppercaseString: string = "";

    lowerCaseString = value.toLowerCase();

    UppercaseString = lowerCaseString.charAt(0).toUpperCase() + lowerCaseString.slice(1)

    return UppercaseString;
  }
}
