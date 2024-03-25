import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sorter',
  pure: false
})
export class SorterPipe implements PipeTransform {
  transform(value: any, propName: string) {
    return value.sort((a, b) => {
      if (a[propName] > b[propName]) {
        return 1;
      }
      else {
        return -1;
      }
    })
  }






  // stableArray=[];
  // offlineArray=[];
  // criticalArray=[];

  // transform(array: string[]): unknown {
  //   for (let item of array) {
  //     if (item['status']==='stable') {
  //       this.stableArray.push(item)
  //     }
  //     if (item['status']==='offline') {
  //       this.offlineArray.push(item)
  //     }
  //     if (item['status']==='critical') {
  //       this.criticalArray.push(item)
  //     }
  //   }

  //   return this.stableArray.concat(this.offlineArray, this.criticalArray);
  // }

}
