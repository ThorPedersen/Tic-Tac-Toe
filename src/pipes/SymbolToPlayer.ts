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

  transform(Bob:string):string {
      let newStr: string = "";

      if(Bob == "O")
      {
          newStr = "../../assets/images/O.png";
      }
      if(Bob == "X")
      {
          newStr = "../../assets/images/X.png";
      }

      return newStr;        
  }
}
