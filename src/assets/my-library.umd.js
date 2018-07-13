(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('my-library', ['exports', '@angular/core'], factory) :
    (factory((global['my-library'] = {}),global.ng.core));
}(this, (function (exports,i0) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var MyLibraryService = (function () {
        function MyLibraryService() {
        }
        MyLibraryService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] },
        ];
        /** @nocollapse */
        MyLibraryService.ctorParameters = function () { return []; };
        /** @nocollapse */ MyLibraryService.ngInjectableDef = i0.defineInjectable({ factory: function MyLibraryService_Factory() { return new MyLibraryService(); }, token: MyLibraryService, providedIn: "root" });
        return MyLibraryService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var MyLibraryComponent = (function () {
        function MyLibraryComponent(greeter) {
            this.greeter = greeter;
        }
        /**
         * @return {?}
         */
        MyLibraryComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.greeting = this.greeter.greet();
            };
        MyLibraryComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'mlib-custom-helloworld',
                        template: "\n    <p>\n      I'm a dynamically loaded component! Whoever called me left this message: {{greeting}}\n    </p>\n  ",
                        styles: []
                    },] },
        ];
        /** @nocollapse */
        MyLibraryComponent.ctorParameters = function () {
            return [
                { type: undefined, decorators: [{ type: i0.Inject, args: ['Greeter',] }] }
            ];
        };
        return MyLibraryComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var TIXtensionModule = (function () {
        function TIXtensionModule() {
        }
        TIXtensionModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [],
                        declarations: [MyLibraryComponent],
                        exports: [MyLibraryComponent]
                    },] },
        ];
        return TIXtensionModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    exports.MyLibraryService = MyLibraryService;
    exports.MyLibraryComponent = MyLibraryComponent;
    exports.TIXtensionModule = TIXtensionModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktbGlicmFyeS51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL215LWxpYnJhcnkvbGliL215LWxpYnJhcnkuc2VydmljZS50cyIsIm5nOi8vbXktbGlicmFyeS9saWIvbXktbGlicmFyeS5jb21wb25lbnQudHMiLCJuZzovL215LWxpYnJhcnkvbGliL215LWxpYnJhcnkubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTXlMaWJyYXJ5U2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEdyZWV0ZXIgfSBmcm9tICdkb21haW4taW50ZXJmYWNlcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21saWItY3VzdG9tLWhlbGxvd29ybGQnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxwPlxuICAgICAgSSdtIGEgZHluYW1pY2FsbHkgbG9hZGVkIGNvbXBvbmVudCEgV2hvZXZlciBjYWxsZWQgbWUgbGVmdCB0aGlzIG1lc3NhZ2U6IHt7Z3JlZXRpbmd9fVxuICAgIDwvcD5cbiAgYCxcbiAgc3R5bGVzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBNeUxpYnJhcnlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHB1YmxpYyBncmVldGluZzogc3RyaW5nO1xuICBjb25zdHJ1Y3RvcihASW5qZWN0KCdHcmVldGVyJykgIHByaXZhdGUgZ3JlZXRlcjogR3JlZXRlcikgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5ncmVldGluZyA9IHRoaXMuZ3JlZXRlci5ncmVldCgpO1xuICB9XG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNeUxpYnJhcnlDb21wb25lbnQgfSBmcm9tICcuL215LWxpYnJhcnkuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW10sXG4gIGRlY2xhcmF0aW9uczogW015TGlicmFyeUNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtNeUxpYnJhcnlDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIFRJWHRlbnNpb25Nb2R1bGUge31cbiJdLCJuYW1lcyI6WyJJbmplY3RhYmxlIiwiQ29tcG9uZW50IiwiSW5qZWN0IiwiTmdNb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtRQU9FO1NBQWlCOztvQkFMbEJBLGFBQVUsU0FBQzt3QkFDVixVQUFVLEVBQUUsTUFBTTtxQkFDbkI7Ozs7OytCQUpEOzs7Ozs7O0FDQUE7UUFlRSw0QkFBd0MsT0FBZ0I7WUFBaEIsWUFBTyxHQUFQLE9BQU8sQ0FBUztTQUFLOzs7O1FBRTdELHFDQUFROzs7WUFBUjtnQkFDRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7YUFDdEM7O29CQWhCRkMsWUFBUyxTQUFDO3dCQUNULFFBQVEsRUFBRSx3QkFBd0I7d0JBQ2xDLFFBQVEsRUFBRSxzSEFJVDt3QkFDRCxNQUFNLEVBQUUsRUFBRTtxQkFDWDs7Ozs7d0RBSWNDLFNBQU0sU0FBQyxTQUFTOzs7aUNBZi9COzs7Ozs7O0FDQUE7Ozs7b0JBR0NDLFdBQVEsU0FBQzt3QkFDUixPQUFPLEVBQUUsRUFBRTt3QkFDWCxZQUFZLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQzt3QkFDbEMsT0FBTyxFQUFFLENBQUMsa0JBQWtCLENBQUM7cUJBQzlCOzsrQkFQRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==