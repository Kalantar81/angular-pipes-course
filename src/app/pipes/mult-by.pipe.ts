import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  /** Как он будет называться в HTML */
  name: 'mult'
})
export class MultByPipe implements PipeTransform {
  /** by default will be 2 */
  transform(num: number, pow: number = 2): number {
    return num * pow;
  }

}
