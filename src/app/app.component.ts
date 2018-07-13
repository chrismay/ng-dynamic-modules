import { Component, Compiler, Injector, ViewContainerRef, ViewChild } from '@angular/core';
declare var SystemJS;
import * as AngularCommon from '@angular/common';
import * as AngularCore from '@angular/core';

// <mlib-my-library></mlib-my-library>
@Component({
  selector: 'app-root',
  template: '<button (click)="load()">Load</button><ng-container #vc></ng-container>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'modular-app';
  @ViewChild('vc', {read: ViewContainerRef}) vc;

  constructor(private compiler: Compiler, private injector: Injector) {}

  load() {
    // register the modules that we already loaded so that no HTTP request is made
    // in my case, the modules are already available in my bundle (bundled by webpack)
    SystemJS.set('@angular/core', SystemJS.newModule(AngularCore));
    SystemJS.set('@angular/common', SystemJS.newModule(AngularCommon));

    // now, import the new module
    SystemJS.import('/assets/my-library.umd.js').then(module => {
      this.compiler
        .compileModuleAndAllComponentsAsync(module.TIXtensionModule)
        .then(compiled => {
          const moduleRef = compiled.ngModuleFactory.create(this.injector);
          const factory = compiled.componentFactories[0];
          if (factory) {
             console.log(factory);
            const component = this.vc.createComponent(factory);
             const instance = component.instance;
          }
        });
    });
  }
}
