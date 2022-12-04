import {Injectable, OnInit} from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AppFunctions {

  public transformToCurrency(input: number) {
    let result = input.toFixed(2);
    result = result.replace('.', ',')
    return result
  }
}
