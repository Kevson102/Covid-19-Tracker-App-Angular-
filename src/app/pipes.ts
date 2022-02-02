import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'formatNumber'})
export class FormatNumberPipe implements PipeTransform {
  transform(value: number): string {

    let today:Date =new Date();//get current date ad time
    let todayWithTime:any = new Date(today.getFullYear(),today.getMonth(),today.getDate(),today.getTime())
    return value.toLocaleString();
    
  }
}
