import { Injectable } from '@angular/core';
import { Greeter } from 'domain-interfaces/public_api';

@Injectable({
  providedIn: 'root'
})
export class GreeterService  implements Greeter {

  constructor() { }

  greet() {
    return 'This data came from the containing app';
  }
}
