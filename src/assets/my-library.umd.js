(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('my-library', ['exports', '@angular/core'], factory) :
    (factory((global['my-library'] = {}),global.ng.core));
}(this, (function (exports,i0) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var MyLibraryComponent = (function () {
        function MyLibraryComponent() {
        }
        /**
         * @return {?}
         */
        MyLibraryComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        MyLibraryComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'mlib-custom-helloworld',
                        template: "\n    <p>\n      I'm a dynamically loaded component!\n    </p>\n  ",
                        styles: []
                    },] },
        ];
        /** @nocollapse */
        MyLibraryComponent.ctorParameters = function () { return []; };
        return MyLibraryComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    exports.MyLibraryService = MyLibraryService;
    exports.MyLibraryComponent = MyLibraryComponent;
    exports.TIXtensionModule = TIXtensionModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktbGlicmFyeS51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL215LWxpYnJhcnkvbGliL215LWxpYnJhcnkuc2VydmljZS50cyIsIm5nOi8vbXktbGlicmFyeS9saWIvbXktbGlicmFyeS5jb21wb25lbnQudHMiLCJuZzovL215LWxpYnJhcnkvbGliL215LWxpYnJhcnkubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTXlMaWJyYXJ5U2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21saWItY3VzdG9tLWhlbGxvd29ybGQnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxwPlxuICAgICAgSSdtIGEgZHluYW1pY2FsbHkgbG9hZGVkIGNvbXBvbmVudCFcbiAgICA8L3A+XG4gIGAsXG4gIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgTXlMaWJyYXJ5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNeUxpYnJhcnlDb21wb25lbnQgfSBmcm9tICcuL215LWxpYnJhcnkuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtNeUxpYnJhcnlDb21wb25lbnRdLFxuICBleHBvcnRzOiBbTXlMaWJyYXJ5Q29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBUSVh0ZW5zaW9uTW9kdWxlIHtcbiB9XG4iXSwibmFtZXMiOlsiSW5qZWN0YWJsZSIsIkNvbXBvbmVudCIsIk5nTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7UUFPRTtTQUFpQjs7b0JBTGxCQSxhQUFVLFNBQUM7d0JBQ1YsVUFBVSxFQUFFLE1BQU07cUJBQ25COzs7OzsrQkFKRDs7Ozs7OztBQ0FBO1FBYUU7U0FBaUI7Ozs7UUFFakIscUNBQVE7OztZQUFSO2FBQ0M7O29CQWRGQyxZQUFTLFNBQUM7d0JBQ1QsUUFBUSxFQUFFLHdCQUF3Qjt3QkFDbEMsUUFBUSxFQUFFLG9FQUlUO3dCQUNELE1BQU0sRUFBRSxFQUFFO3FCQUNYOzs7O2lDQVZEOzs7Ozs7O0FDQUE7Ozs7b0JBR0NDLFdBQVEsU0FBQzt3QkFDUixPQUFPLEVBQUUsRUFDUjt3QkFDRCxZQUFZLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQzt3QkFDbEMsT0FBTyxFQUFFLENBQUMsa0JBQWtCLENBQUM7cUJBQzlCOzsrQkFSRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==