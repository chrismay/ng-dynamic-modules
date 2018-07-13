import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mlib-custom-helloworld',
  template: `
    <p>
      I'm a dynamically loaded component!
    </p>
  `,
  styles: []
})
export class MyLibraryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
