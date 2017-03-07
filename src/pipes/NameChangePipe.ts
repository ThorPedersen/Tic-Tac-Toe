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

  transform(Bob:string):string {
    let lowerCaseString: string = "";
    let UppercaseString: string = "";

    lowerCaseString = Bob.toLowerCase();

    UppercaseString = lowerCaseString.charAt(0).toUpperCase() + lowerCaseString.slice(1)

    return UppercaseString;
  }
}
