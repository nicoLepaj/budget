import { Injectable, Pipe } from '@angular/core';

@Pipe({
  name: 'roundNumber'
})
@Injectable()
export class RoundNumber {

  transform(num) {
    return Number(num).toFixed(0);
  }

}
