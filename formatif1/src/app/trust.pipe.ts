import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trust'
})
export class TrustPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
