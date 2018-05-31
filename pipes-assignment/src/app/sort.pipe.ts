import { Pipe, PipeTransform } from '@angular/core';
// Forcing the pipe to be updated whenever the data changes - can cause performance issues
@Pipe({
  name: 'sort',
  pure: false
})
export class SortPipe implements PipeTransform {
  transform(value: any, propName: string): any {
    return value.sort(function(a, b){
      if (a[propName] < b[propName]) {return -1;}
      if (a[propName] > b[propName]) {return 1;}
      return 0;
    });
  }
}
