import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {
  transform(value: any) {
    var reversedString = "";
    // add each character to reversedString
    for (var i = value.length - 1; i >= 0; i--) {
      reversedString = reversedString + value.charAt(i);
    }
    return reversedString;
  }
}
