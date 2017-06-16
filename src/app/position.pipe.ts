import { Pipe, PipeTransform } from '@angular/core';
import { Player } from './player.model';

@Pipe({
  name: 'position'
})
export class PositionPipe implements PipeTransform {

  transform(input: Player[], desire) {
    var output: Player[] = [];
   if(desire === "guard") {
     for (var i = 0; i < input.length; i++) {
       if (input[i].position.toLowerCase() === "guard") {
         output.push(input[i]);
       }
     }
     return output;
   } else if (desire === "forward") {
     for (var i = 0; i < input.length; i++) {
       if (input[i].position.toLowerCase() === "forward") {
         output.push(input[i]);
       }
     }
     return output;
   } else if (desire === "center") {
       for (var i = 0; i < input.length; i++) {
         if (input[i].position.toLowerCase() === "center") {
           output.push(input[i]);
         }
       }
       return output;
   } else {
     return input;
   }
 }
}
