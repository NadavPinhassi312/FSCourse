import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {
  newValue:String;
  transform(value: string): unknown {
  //   for (let char of value) {
  //     this.newValue = char + this.newValue;
  //  }
  //  return this.newValue;
  return value.split('').reverse().join('');
  }

}
