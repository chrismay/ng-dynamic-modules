import { Component, OnInit, Inject } from '@angular/core';
import { Greeter } from 'domain-interfaces';

@Component({
  selector: 'mlib-custom-helloworld',
  template: `
    <p>
      I'm a dynamically loaded component! Whoever called me left this message: {{greeting}}
    </p>
  `,
  styles: []
})
export class MyLibraryComponent implements OnInit {

  public greeting: string;
  constructor(@Inject('Greeter')  private greeter: Greeter) { }

  ngOnInit() {
    this.greeting = this.greeter.greet();
  }

}
