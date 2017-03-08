import { Injectable, Pipe, PipeTransform } from '@angular/core';

/*
  Generated class for the SymbolToPlayer pipe.

  See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
  Angular 2 Pipes.
*/
@Pipe({
  name: 'SymbolToPlayer'
})
@Injectable()
export class SymbolToPlayer implements PipeTransform {

  transform(value:string):string {
      let newStr: string = "";

      //Sets the returned string to either be an 0 image or X image
      //based on the X and Y charactes in the output of the board array
      if(value == "O")
      {
          newStr = "../../assets/images/O.png";
      }
      if(value == "X")
      {
          newStr = "../../assets/images/X.png";
      }

      return newStr;        
  }
}
