(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/forms'), require('@angular/router'), require('moment'), require('@angular/common/http'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('@gustavguez/ngx-core', ['exports', '@angular/core', '@angular/common', '@angular/forms', '@angular/router', 'moment', '@angular/common/http', 'rxjs/operators'], factory) :
    (global = global || self, factory((global.gustavguez = global.gustavguez || {}, global.gustavguez['ngx-core'] = {}), global.ng.core, global.ng.common, global.ng.forms, global.ng.router, global.momentImported, global.ng.common.http, global.rxjs.operators));
}(this, (function (exports, i0, common, forms, router, momentImported, i1, operators) { 'use strict';

    (function (StatusEnum) {
        StatusEnum["PRIMARY"] = "primary";
        StatusEnum["SECONDARY"] = "secondary";
        StatusEnum["SUCCESS"] = "success";
        StatusEnum["DANGER"] = "danger";
        StatusEnum["WARNING"] = "warning";
        StatusEnum["INFO"] = "info";
        StatusEnum["LIGHT"] = "light";
        StatusEnum["DARK"] = "dark";
    })(exports.StatusEnum || (exports.StatusEnum = {}));

    var NgxGustavguezButtonComponent = /** @class */ (function () {
        function NgxGustavguezButtonComponent() {
            // Output
            this.onClick = new i0.EventEmitter();
        }
        // Custom events
        NgxGustavguezButtonComponent.prototype.onDoClick = function () {
            this.onClick.emit();
        };
        return NgxGustavguezButtonComponent;
    }());
    NgxGustavguezButtonComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'ngx-gustavguez-button',
                    template: "<button \n    type=\"button\" \n\tclass=\"btn btn-{{ status ? status : 'primary' }} btn-block\"\n\t(click)=\"onDoClick()\">\n    <span *ngIf=\"!loading\">{{ text }}</span>\n\n    <ngx-gustavguez-loader \n        [loadingText]=\"loadingText\"\n        [loading]=\"loading\"></ngx-gustavguez-loader>\n</button>",
                    styles: [""]
                },] }
    ];
    NgxGustavguezButtonComponent.propDecorators = {
        text: [{ type: i0.Input }],
        loadingText: [{ type: i0.Input }],
        loading: [{ type: i0.Input }],
        status: [{ type: i0.Input }],
        onClick: [{ type: i0.Output }]
    };

    var NgxGustavguezInputComponent = /** @class */ (function () {
        function NgxGustavguezInputComponent() {
            // Outputs
            this.onChange = new i0.EventEmitter();
        }
        // Custom events
        NgxGustavguezInputComponent.prototype.onEmitChange = function () {
            this.onChange.emit(this.form.get(this.controlName).value);
        };
        return NgxGustavguezInputComponent;
    }());
    NgxGustavguezInputComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'ngx-gustavguez-input',
                    template: "<div class=\"input-group\" [formGroup]=\"form\">\n\t<ngx-gustavguez-input-holder\n\t\t[form]=\"form\"\n\t\t[controlName]=\"controlName\"\n\t\t[requiredErrorText]=\"requiredErrorText\">\n\t\t<label \n\t\t\t*ngIf=\"label\"\n\t\t\t[for]=\"controlId\">{{ label }}</label>\n\t\t<input \n\t\t\tclass=\"form-control\"\n\t\t\t(change)=\"onEmitChange()\"\n\t\t\t[id]=\"controlId\"\n\t\t\t[type]=\"type\"\n\t\t\t[placeholder]=\"placeholder\"\n\t\t\t[formControlName]=\"controlName\">\n\t</ngx-gustavguez-input-holder>\n</div>",
                    styles: [""]
                },] }
    ];
    NgxGustavguezInputComponent.propDecorators = {
        form: [{ type: i0.Input }],
        label: [{ type: i0.Input }],
        placeholder: [{ type: i0.Input }],
        controlId: [{ type: i0.Input }],
        controlName: [{ type: i0.Input }],
        type: [{ type: i0.Input }],
        requiredErrorText: [{ type: i0.Input }],
        onChange: [{ type: i0.Output }]
    };

    var NgxGustavguezInputHolderComponent = /** @class */ (function () {
        function NgxGustavguezInputHolderComponent() {
        }
        return NgxGustavguezInputHolderComponent;
    }());
    NgxGustavguezInputHolderComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'ngx-gustavguez-input-holder',
                    template: "<div class=\"form-group\">\n    <!-- CONTAINER -->\n    <ng-content></ng-content>\n\n    <!-- VALIDATIONS -->\n    <div class=\"text-danger\" *ngIf=\"form\">\n        <small *ngIf=\"\n                form.get(controlName).touched \n                && form.get(controlName).errors\n                && form.get(controlName).errors.required\">\n            {{ requiredErrorText ? requiredErrorText : \"Este campo es requerido\"  }}\n        </small>\n    </div>\n</div>",
                    host: { class: 'w-100' },
                    styles: [""]
                },] }
    ];
    NgxGustavguezInputHolderComponent.propDecorators = {
        form: [{ type: i0.Input }],
        controlName: [{ type: i0.Input }],
        requiredErrorText: [{ type: i0.Input }]
    };

    var NgxGustavguezSelectComponent = /** @class */ (function () {
        function NgxGustavguezSelectComponent() {
            // Outputs
            this.onChange = new i0.EventEmitter();
        }
        // Custom events
        NgxGustavguezSelectComponent.prototype.onEmitChange = function () {
            this.onChange.emit(this.form.get(this.controlName).value);
        };
        return NgxGustavguezSelectComponent;
    }());
    NgxGustavguezSelectComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'ngx-gustavguez-select',
                    template: "<div class=\"input-group\" [formGroup]=\"form\">\n\t<ngx-gustavguez-input-holder\n\t\t[form]=\"form\"\n\t\t[controlName]=\"controlName\"\n\t\t[requiredErrorText]=\"requiredErrorText\">\n\t\t<label \n\t\t\t*ngIf=\"label\"\n\t\t\t[for]=\"controlId\">{{ label }}</label>\n\t\t<select \n\t\t\tclass=\"custom-select\"\n\t\t\t(change)=\"onEmitChange()\"\n\t\t\t[id]=\"controlId\"\n\t\t\t[formControlName]=\"controlName\">\n\t\t\t<option \n\t\t\t\t[value]=\"null\" \n\t\t\t\tdisabled \n\t\t\t\tselected>{{ placeholder }}</option>\n\t\t\t<option \n\t\t\t\t*ngFor=\"let option of options\"\n\t\t\t\t[value]=\"option[optionId]\">{{ option[optionLabel] }}</option>\n\t\t</select>\n\t</ngx-gustavguez-input-holder>\n</div>",
                    styles: [""]
                },] }
    ];
    NgxGustavguezSelectComponent.propDecorators = {
        form: [{ type: i0.Input }],
        label: [{ type: i0.Input }],
        controlId: [{ type: i0.Input }],
        controlName: [{ type: i0.Input }],
        requiredErrorText: [{ type: i0.Input }],
        options: [{ type: i0.Input }],
        placeholder: [{ type: i0.Input }],
        optionId: [{ type: i0.Input }],
        optionLabel: [{ type: i0.Input }],
        onChange: [{ type: i0.Output }]
    };

    var NgxGustavguezSubmitComponent = /** @class */ (function () {
        function NgxGustavguezSubmitComponent() {
            // Output
            this.onClick = new i0.EventEmitter();
        }
        // Custom events
        NgxGustavguezSubmitComponent.prototype.onDoClick = function () {
            this.onClick.emit();
        };
        return NgxGustavguezSubmitComponent;
    }());
    NgxGustavguezSubmitComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'ngx-gustavguez-submit',
                    template: "<div class=\"input-group\">\n\t<button \n\t\ttype=\"submit\" \n\t\tclass=\"btn btn-{{ status ? status : 'primary' }} btn-block\"\n\t\t(click)=\"onDoClick()\">\n\t\t<span *ngIf=\"!loading\">{{ text }}</span>\n\n\t\t<ngx-gustavguez-loader \n\t\t\t[loadingText]=\"loadingText\"\n\t\t\t[loading]=\"loading\"></ngx-gustavguez-loader>\n\t</button>\n</div>",
                    styles: [""]
                },] }
    ];
    NgxGustavguezSubmitComponent.propDecorators = {
        text: [{ type: i0.Input }],
        loadingText: [{ type: i0.Input }],
        loading: [{ type: i0.Input }],
        status: [{ type: i0.Input }],
        onClick: [{ type: i0.Output }]
    };

    var NgxGustavguezTagsComponent = /** @class */ (function () {
        function NgxGustavguezTagsComponent() {
            // Outputs
            this.onSelect = new i0.EventEmitter();
        }
        // Custom events
        NgxGustavguezTagsComponent.prototype.onEmitSelect = function (option) {
            this.onSelect.emit(option);
        };
        return NgxGustavguezTagsComponent;
    }());
    NgxGustavguezTagsComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'ngx-gustavguez-tags',
                    template: "<div class=\"input-group pb-2\">\n\t<button \n\t\ttype=\"button\" \n\t\tclass=\"btn btn-danger btn-sm ml-1\"\n\t\t(click)=\"onEmitSelect(option)\"\n\t\t*ngFor=\"let option of options\">\n\t\t{{ option[optionLabel] }}\n\t</button>\n</div>",
                    styles: [""]
                },] }
    ];
    NgxGustavguezTagsComponent.propDecorators = {
        options: [{ type: i0.Input }],
        optionLabel: [{ type: i0.Input }],
        onSelect: [{ type: i0.Output }]
    };

    var NgxGustavguezTextareaComponent = /** @class */ (function () {
        function NgxGustavguezTextareaComponent() {
            // Outputs
            this.onChange = new i0.EventEmitter();
        }
        // Custom events
        NgxGustavguezTextareaComponent.prototype.onEmitChange = function () {
            this.onChange.emit(this.form.get(this.controlName).value);
        };
        return NgxGustavguezTextareaComponent;
    }());
    NgxGustavguezTextareaComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'ngx-gustavguez-textarea',
                    template: "<div class=\"input-group\" [formGroup]=\"form\">\n\t<ngx-gustavguez-input-holder\n\t\t[form]=\"form\"\n\t\t[controlName]=\"controlName\"\n\t\t[requiredErrorText]=\"requiredErrorText\">\n\t\t<label \n\t\t\t*ngIf=\"label\"\n\t\t\t[for]=\"controlId\">{{ label }}</label>\n\t\t<textarea \n\t\t\tclass=\"form-control\"\n\t\t\t(change)=\"onEmitChange()\"\n\t\t\t[id]=\"controlId\"\n\t\t\t[placeholder]=\"placeholder\"\n\t\t\t[formControlName]=\"controlName\"></textarea>\n\t</ngx-gustavguez-input-holder>\n</div>",
                    styles: [""]
                },] }
    ];
    NgxGustavguezTextareaComponent.propDecorators = {
        form: [{ type: i0.Input }],
        label: [{ type: i0.Input }],
        placeholder: [{ type: i0.Input }],
        controlId: [{ type: i0.Input }],
        controlName: [{ type: i0.Input }],
        requiredErrorText: [{ type: i0.Input }],
        onChange: [{ type: i0.Output }]
    };

    var MainSidebarService = /** @class */ (function () {
        function MainSidebarService() {
            // Properties
            this.onChangeState = new i0.EventEmitter();
            this.onToggleState = new i0.EventEmitter();
        }
        // Public methods
        MainSidebarService.prototype.changeState = function (state) {
            this.onChangeState.emit(state);
        };
        MainSidebarService.prototype.toggleState = function () {
            this.onToggleState.emit();
        };
        return MainSidebarService;
    }());
    MainSidebarService.ɵprov = i0.ɵɵdefineInjectable({ factory: function MainSidebarService_Factory() { return new MainSidebarService(); }, token: MainSidebarService, providedIn: "root" });
    MainSidebarService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];

    var NgxGustavguezMainContainerDirective = /** @class */ (function () {
        // Inject services
        function NgxGustavguezMainContainerDirective(mainSidebarService) {
            this.mainSidebarService = mainSidebarService;
            // Modes
            this.classes = [
                'sidebar-mini',
                'layout-fixed',
                'layout-navbar-fixed'
            ];
        }
        // On component init
        NgxGustavguezMainContainerDirective.prototype.ngOnInit = function () {
            var _this = this;
            // Set base classes to host classes
            this.loadHostClasses(false);
            // Watch sidebarState change
            this.mainSidebarService.onChangeState.subscribe(function (state) {
                _this.loadHostClasses(state);
            });
            this.mainSidebarService.onToggleState.subscribe(function () {
                _this.loadHostClasses(!_this.state);
            });
        };
        // Private helper methods
        NgxGustavguezMainContainerDirective.prototype.loadHostClasses = function (state) {
            // Control index just for control
            var indexClassCollapse = this.classes.indexOf('sidebar-collapse');
            var indexClassOpen = this.classes.indexOf('sidebar-open');
            // Load state
            this.state = state;
            // Check state
            if (state) {
                this.classes.push('sidebar-open');
                this.classes.push('sidebar-collapse');
            }
            else {
                if (indexClassCollapse > -1) {
                    this.classes.splice(indexClassCollapse, 1);
                }
                if (indexClassOpen > -1) {
                    this.classes.splice(indexClassOpen, 1);
                }
            }
            // Load classes
            this.hostClasses = this.classes.join(' ');
        };
        return NgxGustavguezMainContainerDirective;
    }());
    NgxGustavguezMainContainerDirective.decorators = [
        { type: i0.Directive, args: [{
                    selector: '[ngxGustavguezMainContainer]'
                },] }
    ];
    NgxGustavguezMainContainerDirective.ctorParameters = function () { return [
        { type: MainSidebarService }
    ]; };
    NgxGustavguezMainContainerDirective.propDecorators = {
        hostClasses: [{ type: i0.HostBinding, args: ['class',] }]
    };

    var ArrayUtility = /** @class */ (function () {
        function ArrayUtility() {
        }
        // Suggest current timezone hours
        ArrayUtility.find = function (items, id, callback, compareKey) {
            // Check id key
            var key = compareKey ? compareKey : 'id';
            // Check items
            if (items instanceof Array) {
                var found_1 = false;
                // Found it
                items.every(function (item, index) {
                    found_1 = item[key] === id;
                    if (found_1) {
                        callback(item, index);
                    }
                    return !found_1;
                });
            }
        };
        ArrayUtility.each = function (items, callback) {
            // Array
            if (items instanceof Array) {
                items.forEach(function (item, index) {
                    callback(item, index);
                });
            }
            else if (items && typeof items === 'object') {
                // Object
                for (var index in items) {
                    callback(items[index], index);
                }
            }
        };
        ArrayUtility.every = function (items, callback) {
            if (items instanceof Array) {
                items.every(function (item, index) { return callback(item, index); });
            }
        };
        ArrayUtility.getDisplayKeys = function (items, idKey, displayKey) {
            var displayKeys = {};
            // Default keys
            idKey = idKey ? idKey : 'id';
            displayKey = displayKey ? displayKey : 'name';
            // Each
            ArrayUtility.each(items, function (obj) {
                displayKeys[obj[idKey]] = obj[displayKey];
            });
            return displayKeys;
        };
        ArrayUtility.getSelectedKeys = function (items) {
            var selected = [];
            // Iterate
            ArrayUtility.each(items, function (val, key) {
                if (val) {
                    selected.push(key);
                }
            });
            return selected;
        };
        ArrayUtility.filter = function (items, callback) {
            var result = [];
            if (items instanceof Array) {
                result = items.filter(function (item, index) { return callback(item, index); });
            }
            return result;
        };
        ArrayUtility.map = function (items, callback) {
            var result = [];
            if (items instanceof Array) {
                result = items.map(function (item, index) { return callback(item, index); });
            }
            return result;
        };
        ArrayUtility.sort = function (items, compareKey) {
            var result = items.sort(function (itemA, itemB) {
                if (itemA[compareKey] < itemB[compareKey]) {
                    return -1;
                }
                if (itemA[compareKey] > itemB[compareKey]) {
                    return 1;
                }
                return 0;
            });
            return result;
        };
        ArrayUtility.hasValue = function (items) {
            return items instanceof Array && items.length > 0;
        };
        return ArrayUtility;
    }());

    var NgxGustavguezMainSidebarComponent = /** @class */ (function () {
        // Inject services
        function NgxGustavguezMainSidebarComponent(mainSidebarService) {
            this.mainSidebarService = mainSidebarService;
            // Outputs
            this.onBrandLink = new i0.EventEmitter();
        }
        // On component init
        NgxGustavguezMainSidebarComponent.prototype.ngOnInit = function () {
            // Init vars
            this.menuItemsStates = {};
        };
        // Custom events
        NgxGustavguezMainSidebarComponent.prototype.onMenuItemClick = function (menuItem) {
            // Check
            if (ArrayUtility.hasValue(menuItem.childs)) {
                // Toggle state
                this.menuItemsStates[menuItem.id] = menuItem.id in this.menuItemsStates ? !this.menuItemsStates[menuItem.id] : false;
            }
            else {
                // Close sidebar
                this.mainSidebarService.changeState(false);
            }
        };
        NgxGustavguezMainSidebarComponent.prototype.onBrandLinkClick = function (event) {
            event.preventDefault();
            // Close sidebar
            this.mainSidebarService.changeState(false);
            // Event emitter
            this.onBrandLink.emit();
        };
        NgxGustavguezMainSidebarComponent.prototype.onCloseSidebar = function () {
            this.mainSidebarService.changeState(false);
        };
        return NgxGustavguezMainSidebarComponent;
    }());
    NgxGustavguezMainSidebarComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'ngx-gustavguez-main-sidebar',
                    template: "<aside class=\"main-sidebar sidebar-dark-primary\">\n    <!-- Brand Logo -->\n    <a \n        href=\"#\"\n        class=\"brand-link\"\n        (click)=\"onBrandLinkClick($event)\">\n        <img \n            *ngIf=\"brandImg\"\n            [src]=\"brandImg\" \n            [alt]=\"brandTitle\"\n            class=\"brand-image img-circle elevation-3\" style=\"opacity: .95\">\n        <span class=\"brand-text font-weight-light\">{{ brandTitle }}</span>\n    </a>\n\n    <!-- Sidebar -->\n    <div class=\"sidebar\">\n        <div \n            *ngIf=\"userIsLogged\"\n            class=\"user-panel mt-3 pb-3 mb-3 d-flex\">\n            <div class=\"image\">\n                <img \n                    *ngIf=\"userAvatar\"\n                    [src]=\"userAvatar\"\n                    [alt]=\"userName\"\n                    class=\"img-circle elevation-2\">\n            </div>\n            <div class=\"info\">\n                <a class=\"d-block\">{{ userName }}</a>\n            </div>\n        </div>\n\n        <!-- Sidebar Menu -->\n        <nav class=\"mt-2\">\n            <ul \n                *ngIf=\"menuItems\"\n                class=\"nav nav-pills nav-sidebar flex-column\" \n                data-widget=\"treeview\" \n                role=\"menu\">\n\n                <li class=\"nav-header\">MEN\u00DA</li>\n\n                <li \n                    [class.menu-open]=\"menuItemsStates[menuItem.id] || menuItemsStates[menuItem.id] === undefined\"\n                    class=\"nav-item has-treeview\"\n                    ngxGustavguezNavItem\n                    [navItem]=\"menuItem\" \n                    [isParent]=\"true\"\n                    [state]=\"menuItemsStates[menuItem.id] || menuItemsStates[menuItem.id] === undefined\"\n                    (onNavItem)=\"onMenuItemClick($event)\"\n                    *ngFor=\"let menuItem of menuItems\"></li>\n\n            </ul>\n        </nav>\n        <!-- /.sidebar-menu -->\n    </div>\n    <!-- /.sidebar -->\n</aside>\n<div id=\"sidebar-overlay\" (click)=\"onCloseSidebar()\"></div>",
                    styles: [".main-sidebar .nav-treeview{background-color:#2d3339}"]
                },] }
    ];
    NgxGustavguezMainSidebarComponent.ctorParameters = function () { return [
        { type: MainSidebarService }
    ]; };
    NgxGustavguezMainSidebarComponent.propDecorators = {
        brandTitle: [{ type: i0.Input }],
        brandImg: [{ type: i0.Input }],
        userIsLogged: [{ type: i0.Input }],
        userAvatar: [{ type: i0.Input }],
        userName: [{ type: i0.Input }],
        menuItems: [{ type: i0.Input }],
        onBrandLink: [{ type: i0.Output }]
    };

    var NgxGustavguezNavComponent = /** @class */ (function () {
        // Inject services
        function NgxGustavguezNavComponent(mainSidebarService) {
            this.mainSidebarService = mainSidebarService;
            // Outputs
            this.onLogout = new i0.EventEmitter();
            this.onBrand = new i0.EventEmitter();
        }
        // Custom events
        NgxGustavguezNavComponent.prototype.onToggleMenu = function (event) {
            event.preventDefault();
            this.mainSidebarService.toggleState();
        };
        NgxGustavguezNavComponent.prototype.onToggleUserMenu = function (event) {
            event.preventDefault();
            this.userMenuState = !this.userMenuState;
        };
        NgxGustavguezNavComponent.prototype.onLogoutClick = function (event) {
            event.preventDefault();
            // Emit logout
            this.onLogout.emit();
            // Close user menu
            this.userMenuState = false;
        };
        NgxGustavguezNavComponent.prototype.onBrandLink = function (event) {
            event.preventDefault();
            this.onBrand.emit();
        };
        return NgxGustavguezNavComponent;
    }());
    NgxGustavguezNavComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'ngx-gustavguez-nav',
                    template: "<!-- NAV -->\n<nav class=\"main-header navbar navbar-expand navbar-white navbar-light\">\n    <!-- Left navbar links -->\n    <ul class=\"navbar-nav\">\n        <li class=\"nav-item\">\n            <a  \n                href=\"#\"\n                (click)=\"onToggleMenu($event)\"\n                class=\"nav-link\" \n                data-widget=\"pushmenu\">\n                <i class=\"fas fa-bars\"></i>\n            </a>\n        </li>\n        <li class=\"nav-item d-lg-none\" *ngIf=\"brandTitle\">\n            <a \n                href=\"#\" \n                class=\"nav-link\"\n                (click)=\"onBrandLink($event)\">\n                {{ brandTitle }}\n            </a>\n        </li>\n    </ul>\n\n    <!-- Right navbar links -->\n    <ul class=\"navbar-nav ml-auto\" *ngIf=\"userIsLogged\">\n        <!-- Notifications Dropdown Menu -->\n        <li class=\"nav-item dropdown\">\n\n            <a \n                href=\"#\"\n                (click)=\"onToggleUserMenu($event)\"\n                class=\"nav-link\" \n                data-toggle=\"dropdown\">\n                <i class=\"fas fa-cog\"></i>\n            </a>\n\n            <!-- .show to display -->\n            <div \n                [class.show]=\"userMenuState\"\n                class=\"dropdown-menu dropdown-menu-lg dropdown-menu-right\">\n                <span class=\"dropdown-item dropdown-header\">{{ userMenuText ? userMenuText : \"Men\u00FA de usuario\" }}</span>\n                <div class=\"dropdown-divider\"></div>\n                <a \n                    href=\"#\"\n                    class=\"dropdown-item\" \n                    (click)=\"onLogoutClick($event)\">\n                    <i class=\"fas fa-sign-out-alt\"></i> {{ userMenuLogoutText ? userMenuLogoutText : \"Cerrar sesi\u00F3n\" }}\n                </a>\n            </div>\n        </li>\n    </ul>\n</nav>",
                    styles: [""]
                },] }
    ];
    NgxGustavguezNavComponent.ctorParameters = function () { return [
        { type: MainSidebarService }
    ]; };
    NgxGustavguezNavComponent.propDecorators = {
        brandTitle: [{ type: i0.Input }],
        userIsLogged: [{ type: i0.Input }],
        userMenuText: [{ type: i0.Input }],
        userMenuLogoutText: [{ type: i0.Input }],
        onLogout: [{ type: i0.Output }],
        onBrand: [{ type: i0.Output }]
    };

    var NgxGustavguezNavItemComponent = /** @class */ (function () {
        function NgxGustavguezNavItemComponent() {
            this.onNavItem = new i0.EventEmitter();
        }
        // Custome events
        NgxGustavguezNavItemComponent.prototype.onNavItemClick = function (event) {
            event.preventDefault();
            this.onNavItem.emit(this.navItem);
        };
        NgxGustavguezNavItemComponent.prototype.onNavItemChild = function (child) {
            this.onNavItem.emit(child);
        };
        return NgxGustavguezNavItemComponent;
    }());
    NgxGustavguezNavItemComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: '[ngxGustavguezNavItem]',
                    template: "<a \n    *ngIf=\"navItem.isLink\"\n    (click)=\"onNavItemClick($event)\"\n    [routerLink]=\"navItem.action\"\n    routerLinkActive=\"active\"\n    href=\"#\" \n    class=\"nav-link\">\n    <i class=\"nav-icon {{ navItem.icon }}\"></i>\n    <p>\n        {{ navItem.display }}\n        <i *ngIf=\"isParent\" class=\"right fas fa-angle-left\"></i>\n    </p>\n</a>\n\n<a \n    *ngIf=\"!navItem.isLink\"\n    (click)=\"onNavItemClick($event)\"\n    href=\"#\" \n    class=\"nav-link\">\n    <i class=\"nav-icon {{ navItem.icon }}\"></i>\n    <p>\n        {{ navItem.display }}\n        <i *ngIf=\"isParent\" class=\"right fas fa-angle-left\"></i>\n    </p>\n</a>\n\n<ng-container *ngIf=\"navItem.childs\">\n    <ul \n        [style.display]=\"state ? 'block' : 'none'\"\n        class=\"nav nav-treeview\">\n        <li \n            class=\"nav-item\"\n            ngxGustavguezNavItem\n            (onNavItem)=\"onNavItemChild($event)\"\n            [navItem]=\"child\"\n            *ngFor=\"let child of navItem.childs\"></li>\n    </ul>\n</ng-container>",
                    styles: [""]
                },] }
    ];
    NgxGustavguezNavItemComponent.propDecorators = {
        navItem: [{ type: i0.Input }],
        isParent: [{ type: i0.Input }],
        state: [{ type: i0.Input }],
        onNavItem: [{ type: i0.Output }]
    };

    var moment = momentImported;
    var DateUtility = /** @class */ (function () {
        function DateUtility() {
        }
        DateUtility.todayLocaleString = function () {
            var today = moment();
            return DateUtility.localeString(today);
        };
        DateUtility.todayDateString = function () {
            var today = moment();
            return today.format('YYYY-MM-DD');
        };
        DateUtility.localeString = function (date) {
            return date.format('YYYY-MM-DD') + 'T' + date.format('HH:mm');
        };
        DateUtility.todayAsPrettyString = function () {
            var today = moment();
            return today.format('DD/MM/YYYY');
        };
        DateUtility.prettyDate = function (date, displayHour) {
            var momentDate = moment(date);
            var str = momentDate.format('DD/MM/YYYY');
            if (displayHour) {
                str += ' ' + DateUtility.prettyHour(date);
            }
            return str;
        };
        DateUtility.prettyHour = function (date) {
            var momentDate = moment(date);
            return momentDate.format('HH:mm');
        };
        return DateUtility;
    }());

    var NgxGustavguezPrettyDatePipe = /** @class */ (function () {
        function NgxGustavguezPrettyDatePipe() {
        }
        NgxGustavguezPrettyDatePipe.prototype.transform = function (value) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            return DateUtility.prettyDate(value, args.length ? args[0] : true);
        };
        return NgxGustavguezPrettyDatePipe;
    }());
    NgxGustavguezPrettyDatePipe.decorators = [
        { type: i0.Pipe, args: [{
                    name: 'ngxGustavguezPrettyDate'
                },] }
    ];

    var NgxGustavguezPrettyHourPipe = /** @class */ (function () {
        function NgxGustavguezPrettyHourPipe() {
        }
        NgxGustavguezPrettyHourPipe.prototype.transform = function (value) {
            return DateUtility.prettyHour(value);
        };
        return NgxGustavguezPrettyHourPipe;
    }());
    NgxGustavguezPrettyHourPipe.decorators = [
        { type: i0.Pipe, args: [{
                    name: 'ngxGustavguezPrettyHour'
                },] }
    ];

    var NumberUtility = /** @class */ (function () {
        function NumberUtility() {
        }
        NumberUtility.format = function (val) {
            var valStr = val.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
            return valStr.substring(0, valStr.length - 3);
        };
        NumberUtility.valid = function (val) {
            return !isNaN(Number(val));
        };
        return NumberUtility;
    }());

    var NgxGustavguezPrettyNumberPipe = /** @class */ (function () {
        function NgxGustavguezPrettyNumberPipe() {
        }
        NgxGustavguezPrettyNumberPipe.prototype.transform = function (value) {
            return NumberUtility.valid(value) ? NumberUtility.format(value) : '0';
        };
        return NgxGustavguezPrettyNumberPipe;
    }());
    NgxGustavguezPrettyNumberPipe.decorators = [
        { type: i0.Pipe, args: [{
                    name: 'ngxGustavguezPrettyNumber'
                },] }
    ];

    var NgxGustavguezCardComponent = /** @class */ (function () {
        function NgxGustavguezCardComponent() {
        }
        return NgxGustavguezCardComponent;
    }());
    NgxGustavguezCardComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'ngx-gustavguez-card',
                    template: "<div class=\"card\">\n    <div class=\"card-header\" *ngIf=\"title\">\n        <h5 class=\"card-title\">{{ title }}</h5>\n    </div>\n\n    <div class=\"card-body\">\n        <ng-content></ng-content>\n    </div>\n</div>",
                    styles: [""]
                },] }
    ];
    NgxGustavguezCardComponent.propDecorators = {
        title: [{ type: i0.Input }]
    };

    var NgxGustavguezInfoBoxComponent = /** @class */ (function () {
        function NgxGustavguezInfoBoxComponent() {
        }
        return NgxGustavguezInfoBoxComponent;
    }());
    NgxGustavguezInfoBoxComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'ngx-gustavguez-info-box',
                    template: "<div class=\"info-box\">\n    <span class=\"info-box-icon bg-{{ status }}\">\n        <i class=\"{{ icon }}\"></i>\n    </span>\n\n    <div class=\"info-box-content\">\n        <span class=\"info-box-text\">{{ text }}</span>\n        <span class=\"info-box-number\">{{ number }}</span>\n    </div>\n</div>",
                    styles: [""]
                },] }
    ];
    NgxGustavguezInfoBoxComponent.propDecorators = {
        text: [{ type: i0.Input }],
        number: [{ type: i0.Input }],
        status: [{ type: i0.Input }],
        icon: [{ type: i0.Input }]
    };

    var NgxGustavguezLoaderComponent = /** @class */ (function () {
        function NgxGustavguezLoaderComponent() {
        }
        return NgxGustavguezLoaderComponent;
    }());
    NgxGustavguezLoaderComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'ngx-gustavguez-loader',
                    template: "<ng-container *ngIf=\"loading\">\n\t<span class=\"spinner-border spinner-border-sm\" role=\"status\" aria-hidden=\"true\"></span>\n\t<span class=\"sr-only\">{{ loadingText ? loadingText : \"Cargando...\" }}</span>\n</ng-container>",
                    styles: [""]
                },] }
    ];
    NgxGustavguezLoaderComponent.propDecorators = {
        loading: [{ type: i0.Input }],
        loadingText: [{ type: i0.Input }]
    };

    var NgxGustavguezPageHeaderComponent = /** @class */ (function () {
        function NgxGustavguezPageHeaderComponent() {
        }
        return NgxGustavguezPageHeaderComponent;
    }());
    NgxGustavguezPageHeaderComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'ngx-gustavguez-page-header',
                    template: "<section class=\"content-header\">\n    <div class=\"container-fluid\">\n        <div class=\"row mb-2\">\n            <div class=\"col-sm-6\">\n                <h1>{{ text }}</h1>\n            </div>\n        </div>\n    </div><!-- /.container-fluid -->\n</section>",
                    styles: [""]
                },] }
    ];
    NgxGustavguezPageHeaderComponent.propDecorators = {
        text: [{ type: i0.Input }]
    };

    var NgxGustavguezPopupComponent = /** @class */ (function () {
        function NgxGustavguezPopupComponent() {
            this.onClose = new i0.EventEmitter();
        }
        // Custome events
        NgxGustavguezPopupComponent.prototype.onClosePopup = function () {
            this.onClose.emit();
        };
        return NgxGustavguezPopupComponent;
    }());
    NgxGustavguezPopupComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'ngx-gustavguez-popup',
                    template: "<!-- Modal -->\n<div \n    [class.show]=\"state\"\n    [class.d-block]=\"state\"\n    class=\"modal fade\">\n    <div class=\"modal-dialog\">\n\n        <div class=\"modal-content\">\n\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\">{{ titleText }}</h5>\n                \n                <button type=\"button\" class=\"close\" (click)=\"onClosePopup()\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n\n            <div class=\"modal-body\">\n                <ng-content></ng-content>\n            </div>\n\n            <div class=\"modal-footer\">\n                <button \n                    (click)=\"onClosePopup()\"\n                    type=\"button\" \n                    class=\"btn btn-secondary\">{{ closeText ? closeText : \"Cerrar\" }}</button>\n            </div>\n        </div>\n    </div>\n</div>\n<div \n\t*ngIf=\"state\"\n\t(click)=\"onClosePopup()\"\n    class=\"modal-backdrop fade show\"></div>",
                    styles: [""]
                },] }
    ];
    NgxGustavguezPopupComponent.propDecorators = {
        state: [{ type: i0.Input }],
        titleText: [{ type: i0.Input }],
        closeText: [{ type: i0.Input }],
        onClose: [{ type: i0.Output }]
    };

    var TableActionArgument = /** @class */ (function () {
        // Constructor
        function TableActionArgument(action, model) {
            this.action = action;
            this.model = model;
        }
        return TableActionArgument;
    }());

    var NgxGustavguezTableComponent = /** @class */ (function () {
        function NgxGustavguezTableComponent() {
            // Output
            this.onAction = new i0.EventEmitter();
        }
        // Custom events
        NgxGustavguezTableComponent.prototype.onActionClick = function (action, model) {
            this.onAction.emit(new TableActionArgument(action, model));
        };
        return NgxGustavguezTableComponent;
    }());
    NgxGustavguezTableComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'ngx-gustavguez-table',
                    template: "<table \n\t*ngIf=\"options\" \n\tclass=\"table table-striped table-bordered table-hover text-center table-sm\">\n\t<thead>\n\t\t<tr>\n\t\t\t<th *ngFor=\"let header of options.headers\">{{ header.display }}</th>\n\t\t\t<th *ngIf=\"options.actions && options.actions.length\"></th>\n\t\t</tr>\n\t</thead>\n\t<tbody *ngIf=\"items && items.length\">\n\t\t<tr *ngFor=\"let item of items\">\n\t\t\t<td \n\t\t\t\tclass=\"align-middle\"\n\t\t\t\t*ngFor=\"let field of options.fields\">\n\t\t\t\t<ng-container *ngTemplateOutlet=\"customTdTpl ? customTdTpl : defaultTdTpl; context: { field: field, model: item }\"></ng-container>\n\t\t\t</td>\n\t\t\t<td \n\t\t\t\tclass=\"align-middle\"\n\t\t\t\t*ngIf=\"options.actions && options.actions.length\">\n\t\t\t\t<ng-container *ngFor=\"let action of options.actions\">\n\t\t\t\t\t<button \n\t\t\t\t\t\t*ngIf=\"action.mustDisplay(item)\"\n\t\t\t\t\t\t[title]=\"action.text\"\n\t\t\t\t\t\t(click)=\"onActionClick(action, item)\"\n\t\t\t\t\t\tclass=\"btn btn-{{ action.status }} ml-1 {{ action.btnClasses }}\">\n\t\t\t\t\t\t<span *ngIf=\"action.icon\"><i [class]=\"action.icon\"></i></span>\n\t\t\t\t\t</button>\n\t\t\t\t</ng-container>\n\t\t\t\t\n\t\t\t</td>\n\t\t</tr>\n\t</tbody>\n</table>\n\n<!-- TEMPLATES -->\n<ng-template #defaultTdTpl let-model=\"model\" let-field=\"field\">\n\t{{ model[field] }}\n</ng-template>",
                    styles: [""]
                },] }
    ];
    NgxGustavguezTableComponent.propDecorators = {
        options: [{ type: i0.Input }],
        items: [{ type: i0.Input }],
        customTdTpl: [{ type: i0.Input }],
        onAction: [{ type: i0.Output }]
    };

    var StringUtility = /** @class */ (function () {
        function StringUtility() {
        }
        StringUtility.randomString = function () {
            return Math.random().toString(36).substring(2, 12);
        };
        StringUtility.padLeft = function (val, digits) {
            return val.toString().padStart(digits, '0');
        };
        return StringUtility;
    }());

    var ToastModel = /** @class */ (function () {
        function ToastModel(message, status) {
            this.message = message;
            this.status = status;
            // Generate random id
            this.id = StringUtility.randomString();
        }
        return ToastModel;
    }());

    var ToastsService = /** @class */ (function () {
        function ToastsService() {
            // Event emmiters
            this.onToastAdded = new i0.EventEmitter();
        }
        // Methods
        ToastsService.prototype.addError = function (message) {
            // Open toast
            this.onToastAdded.emit(new ToastModel(message, exports.StatusEnum.DANGER));
        };
        ToastsService.prototype.addSuccess = function (message) {
            // Open toast
            this.onToastAdded.emit(new ToastModel(message, exports.StatusEnum.SUCCESS));
        };
        return ToastsService;
    }());
    ToastsService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ToastsService_Factory() { return new ToastsService(); }, token: ToastsService, providedIn: "root" });
    ToastsService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];

    var NgxGustavguezToastsComponent = /** @class */ (function () {
        // Inject services
        function NgxGustavguezToastsComponent(toastsService) {
            this.toastsService = toastsService;
            // Models
            this.toasts = [];
        }
        // On component init
        NgxGustavguezToastsComponent.prototype.ngOnInit = function () {
            var _this = this;
            // Watch toast added
            this.toastsService.onToastAdded.subscribe(function (toast) {
                _this.openToast(toast);
            });
        };
        // Custom events
        NgxGustavguezToastsComponent.prototype.onCloseToast = function (toast) {
            this.closeToast(toast);
        };
        // Private methods
        NgxGustavguezToastsComponent.prototype.openToast = function (toast) {
            var _this = this;
            // Before push create timeout
            toast.timerInstance = setTimeout(function () {
                _this.closeToast(toast);
            }, 3000);
            // push
            this.toasts.unshift(toast);
        };
        NgxGustavguezToastsComponent.prototype.closeToast = function (toast) {
            var _this = this;
            // Check
            if (toast instanceof ToastModel) {
                ArrayUtility.find(this.toasts, toast.id, function (toastFound, index) {
                    // Clear timer instance
                    clearTimeout(toastFound.timerInstance);
                    // Remove from array
                    _this.toasts.splice(index, 1);
                });
            }
        };
        return NgxGustavguezToastsComponent;
    }());
    NgxGustavguezToastsComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'ngx-gustavguez-toasts',
                    template: "<div \n    class=\"toasts-top-right fixed mr-2 mt-2\" \n    [style.display]=\" toasts.length ? 'block' : 'none' \">\n    <!-- Then put toasts within -->\n    <div \n        class=\"toast show fade bg-{{ toast.status }}\" \n        *ngFor=\"let toast of toasts; let i = index\">\n        <div class=\"toast-header text-light\">\n\n            <strong class=\"mr-auto\">\n                {{ brandTitle }}\n            </strong>\n\n            <button \n                (click)=\"onCloseToast(toast)\"\n                type=\"button\" \n                class=\"btn btn-link text-light\">\n                <i class=\"fas fa-times\"></i>\n            </button>\n        </div>\n\n        <div class=\"toast-body\">{{ toast.message }}</div>\n    </div>\n</div>",
                    styles: [""]
                },] }
    ];
    NgxGustavguezToastsComponent.ctorParameters = function () { return [
        { type: ToastsService }
    ]; };
    NgxGustavguezToastsComponent.propDecorators = {
        brandTitle: [{ type: i0.Input }]
    };

    var NgxGustavguezCoreModule = /** @class */ (function () {
        function NgxGustavguezCoreModule() {
        }
        return NgxGustavguezCoreModule;
    }());
    NgxGustavguezCoreModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [
                        NgxGustavguezButtonComponent,
                        NgxGustavguezInputComponent,
                        NgxGustavguezInputHolderComponent,
                        NgxGustavguezSelectComponent,
                        NgxGustavguezSubmitComponent,
                        NgxGustavguezTagsComponent,
                        NgxGustavguezTextareaComponent,
                        NgxGustavguezMainContainerDirective,
                        NgxGustavguezMainSidebarComponent,
                        NgxGustavguezNavComponent,
                        NgxGustavguezNavItemComponent,
                        NgxGustavguezPrettyDatePipe,
                        NgxGustavguezPrettyHourPipe,
                        NgxGustavguezPrettyNumberPipe,
                        NgxGustavguezCardComponent,
                        NgxGustavguezInfoBoxComponent,
                        NgxGustavguezLoaderComponent,
                        NgxGustavguezPageHeaderComponent,
                        NgxGustavguezPopupComponent,
                        NgxGustavguezTableComponent,
                        NgxGustavguezToastsComponent
                    ],
                    imports: [
                        common.CommonModule,
                        router.RouterModule,
                        forms.ReactiveFormsModule
                    ],
                    exports: [
                        NgxGustavguezButtonComponent,
                        NgxGustavguezInputComponent,
                        NgxGustavguezInputHolderComponent,
                        NgxGustavguezSelectComponent,
                        NgxGustavguezSubmitComponent,
                        NgxGustavguezTagsComponent,
                        NgxGustavguezTextareaComponent,
                        NgxGustavguezMainContainerDirective,
                        NgxGustavguezMainSidebarComponent,
                        NgxGustavguezNavComponent,
                        NgxGustavguezNavItemComponent,
                        NgxGustavguezPrettyDatePipe,
                        NgxGustavguezPrettyHourPipe,
                        NgxGustavguezPrettyNumberPipe,
                        NgxGustavguezCardComponent,
                        NgxGustavguezInfoBoxComponent,
                        NgxGustavguezLoaderComponent,
                        NgxGustavguezPageHeaderComponent,
                        NgxGustavguezPopupComponent,
                        NgxGustavguezTableComponent,
                        NgxGustavguezToastsComponent
                    ]
                },] }
    ];

    var ApiRootResponseStrategyModel = /** @class */ (function () {
        function ApiRootResponseStrategyModel() {
        }
        ApiRootResponseStrategyModel.prototype.getName = function () {
            return 'root';
        };
        ApiRootResponseStrategyModel.prototype.parseJSON = function (json) {
            // Init data
            var data = null;
            // Check key data in json
            if (json) {
                data = json;
            }
            return data;
        };
        return ApiRootResponseStrategyModel;
    }());

    var ApiDataResponseStrategyModel = /** @class */ (function () {
        function ApiDataResponseStrategyModel() {
        }
        ApiDataResponseStrategyModel.prototype.getName = function () {
            return 'data';
        };
        ApiDataResponseStrategyModel.prototype.parseJSON = function (json) {
            // Init data
            var data = null;
            // Check key data in json
            if (json && json.data) {
                data = json.data;
            }
            return data;
        };
        return ApiDataResponseStrategyModel;
    }());

    var ApiResponseModel = /** @class */ (function () {
        function ApiResponseModel(data) {
            this.data = data;
        }
        ApiResponseModel.prototype.hasSingreResult = function () {
            return this.data && this.data.id;
        };
        ApiResponseModel.prototype.hasCollectionResult = function () {
            return ArrayUtility.hasValue(this.data);
        };
        return ApiResponseModel;
    }());

    var FormUtility = /** @class */ (function () {
        function FormUtility() {
        }
        /**
         * Returns a form data object
         * @param json
         */
        FormUtility.jsonToFormData = function (json) {
            var fd = new FormData();
            var _loop_1 = function (key) {
                if (json[key] instanceof Array) {
                    json[key].forEach(function (jsonChild, index) {
                        fd.append(key + '[' + index + ']', jsonChild);
                    });
                }
                else {
                    fd.append(key, json[key]);
                }
            };
            for (var key in json) {
                _loop_1(key);
            }
            return fd;
        };
        /**
         * Find an Blob or File object in json
         * @param json
         */
        FormUtility.needFormData = function (json) {
            var need = false;
            for (var key in json) {
                if (json[key] instanceof File || json[key] instanceof Blob) {
                    need = true;
                    break;
                }
            }
            return need;
        };
        /**
         * Trigger form validations
         * @param formGroup
         */
        FormUtility.validateAllFormFields = function (formGroup) {
            var _this = this;
            Object.keys(formGroup.controls).forEach(function (field) {
                var control = formGroup.get(field);
                if (control instanceof forms.FormControl) {
                    control.markAsTouched({ onlySelf: true });
                }
                else if (control instanceof forms.FormGroup) {
                    _this.validateAllFormFields(control);
                }
            });
        };
        return FormUtility;
    }());

    var ApiService = /** @class */ (function () {
        // Service constructor
        function ApiService(httpClient) {
            this.httpClient = httpClient;
            // Load data strategy by default
            this.apiResponseStrategies = [
                new ApiDataResponseStrategyModel(),
                new ApiRootResponseStrategyModel()
            ];
            // Set as active
            this.activeApiResponseStrategy = this.apiResponseStrategies[0];
        }
        // Setters
        ApiService.prototype.setApiURL = function (apiURL) {
            this.apiURL = apiURL;
        };
        ApiService.prototype.setAccessToken = function (accessToken) {
            this.accessToken = accessToken;
        };
        // Add strategy method
        ApiService.prototype.addApiResponseStrategy = function (strategy) {
            if (strategy.getName()) {
                this.apiResponseStrategies.push(strategy);
            }
        };
        // Change active strategy
        ApiService.prototype.changeApiResponseStrategy = function (strategyName) {
            var _this = this;
            var hasChanged = false;
            // Check current are equal
            if (this.activeApiResponseStrategy.getName() === strategyName) {
                return hasChanged;
            }
            // Find strategy
            ArrayUtility.every(this.apiResponseStrategies, function (strategy) {
                // Check name
                if (strategy.getName() === strategyName) {
                    // Save previous
                    _this.previousApiResponseStrategy = _this.activeApiResponseStrategy;
                    // Load new stategy
                    _this.activeApiResponseStrategy = strategy;
                    // Mark has changed
                    hasChanged = true;
                }
                return !hasChanged;
            });
            return hasChanged;
        };
        // Restore prev active stategy
        ApiService.prototype.restoreApiResponseStrategy = function () {
            // Check prev are not empty and is different
            if (this.previousApiResponseStrategy !== undefined
                && this.previousApiResponseStrategy.getName() !== this.activeApiResponseStrategy.getName()) {
                this.activeApiResponseStrategy = this.previousApiResponseStrategy;
            }
        };
        // Fetch
        ApiService.prototype.fetchData = function (uri, params) {
            var _this = this;
            // Check cache of observables
            // Get options
            var httpOptions = {
                headers: new i1.HttpHeaders({
                    Authorization: 'Bearer ' + this.accessToken
                }),
                params: params
            };
            // Do request
            return this.httpClient
                .get(this.apiURL + uri, httpOptions)
                .pipe(
            // Map response
            operators.map(function (response) { return _this.parseResponse(response); }));
        };
        // Fetch
        ApiService.prototype.getObj = function (uri, id) {
            var _this = this;
            // Check cache of observables
            // Get options
            var httpOptions = {
                headers: new i1.HttpHeaders({
                    Authorization: 'Bearer ' + this.accessToken
                })
            };
            // Do request
            return this.httpClient
                .get(this.apiURL + uri + (id ? '/' + id : ''), httpOptions)
                .pipe(
            // Map response
            operators.map(function (response) { return _this.parseResponse(response); }));
        };
        // Update an object using PATCH
        ApiService.prototype.partialUpdateObj = function (uri, id, obj) {
            var _this = this;
            // Post options
            var httpOptions = {
                headers: new i1.HttpHeaders({
                    Authorization: 'Bearer ' + this.accessToken
                })
            };
            // Url
            var url = this.apiURL + uri + '/' + id;
            // Do request
            return this.httpClient
                .patch(url, obj, httpOptions)
                .pipe(
            // Map response
            operators.map(function (response) { return _this.parseResponse(response); }));
        };
        // Delete an object using DELETE
        ApiService.prototype.deleteObj = function (uri, id) {
            // Post options
            var httpOptions = {
                headers: new i1.HttpHeaders({
                    'Authorization': 'Bearer ' + this.accessToken
                })
            };
            // Url
            var url = this.apiURL + uri + (id ? '/' + id : '');
            // Do request
            return this.httpClient
                .delete(url, httpOptions)
                .pipe(
            // Map response
            operators.map(function () { return true; }));
        };
        // Create an object with POST
        ApiService.prototype.createObj = function (uri, obj) {
            var _this = this;
            // Post options
            var httpOptions = {
                headers: new i1.HttpHeaders({
                    Authorization: 'Bearer ' + this.accessToken
                })
            };
            // Url
            var url = this.apiURL + uri;
            // Check form data
            if (FormUtility.needFormData(obj)) {
                obj = FormUtility.jsonToFormData(obj);
            }
            // Do request
            return this.httpClient
                .post(url, obj, httpOptions)
                .pipe(
            // Map response
            operators.map(function (response) { return _this.parseResponse(response); }));
        };
        // Parse response
        ApiService.prototype.parseResponse = function (response) {
            // Current response
            var resp = new ApiResponseModel();
            // CHECK RESPONSE
            resp.data = this.activeApiResponseStrategy.parseJSON(response);
            // Return api response model
            return resp;
        };
        return ApiService;
    }());
    ApiService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ApiService_Factory() { return new ApiService(i0.ɵɵinject(i1.HttpClient)); }, token: ApiService, providedIn: "root" });
    ApiService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    ApiService.ctorParameters = function () { return [
        { type: i1.HttpClient }
    ]; };

    var WindowUtility = /** @class */ (function () {
        function WindowUtility() {
        }
        WindowUtility.isSmallScreen = function () {
            return window.innerWidth < 768;
        };
        WindowUtility.isNotSmallScreen = function () {
            return window.innerWidth >= 768;
        };
        return WindowUtility;
    }());

    var NavItemModel = /** @class */ (function () {
        function NavItemModel(display, icon, action, childs) {
            this.display = display;
            this.icon = icon;
            this.action = action;
            this.childs = childs;
            this.id = StringUtility.randomString();
            this.isLink = !ArrayUtility.hasValue(childs);
        }
        return NavItemModel;
    }());

    var TableHeaderModel = /** @class */ (function () {
        // Constructor
        function TableHeaderModel(display) {
            this.display = display;
        }
        return TableHeaderModel;
    }());

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, exports) {
        for (var p in m)
            if (p !== "default" && !exports.hasOwnProperty(p))
                __createBinding(exports, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    ;
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (Object.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }
    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    var TableActionModel = /** @class */ (function () {
        // Constructor
        function TableActionModel(icon, text, mustDisplayCallback) {
            this.icon = icon;
            this.text = text;
            this.mustDisplayCallback = mustDisplayCallback;
            // By default is primary
            this.status = exports.StatusEnum.PRIMARY;
        }
        // Abstract methods
        TableActionModel.prototype.mustDisplay = function (model) {
            return this.mustDisplayCallback instanceof Function ? this.mustDisplayCallback(model) : true;
        };
        return TableActionModel;
    }());

    var TableShowActionModel = /** @class */ (function (_super) {
        __extends(TableShowActionModel, _super);
        function TableShowActionModel(mustDisplayCallback) {
            // Call parent constructor
            return _super.call(this, 'fas fa-search', 'Show model', mustDisplayCallback) || this;
        }
        return TableShowActionModel;
    }(TableActionModel));

    var TableOptionsModel = /** @class */ (function () {
        // Contructor
        function TableOptionsModel(headers, fields) {
            this.headers = headers;
            this.fields = fields;
            // Default actions
            this.actions = [new TableShowActionModel()];
        }
        return TableOptionsModel;
    }());

    // Lib module

    /**
     * Generated bundle index. Do not edit.
     */

    exports.ApiDataResponseStrategyModel = ApiDataResponseStrategyModel;
    exports.ApiResponseModel = ApiResponseModel;
    exports.ApiRootResponseStrategyModel = ApiRootResponseStrategyModel;
    exports.ApiService = ApiService;
    exports.ArrayUtility = ArrayUtility;
    exports.DateUtility = DateUtility;
    exports.FormUtility = FormUtility;
    exports.MainSidebarService = MainSidebarService;
    exports.NavItemModel = NavItemModel;
    exports.NgxGustavguezButtonComponent = NgxGustavguezButtonComponent;
    exports.NgxGustavguezCardComponent = NgxGustavguezCardComponent;
    exports.NgxGustavguezCoreModule = NgxGustavguezCoreModule;
    exports.NgxGustavguezInfoBoxComponent = NgxGustavguezInfoBoxComponent;
    exports.NgxGustavguezInputComponent = NgxGustavguezInputComponent;
    exports.NgxGustavguezInputHolderComponent = NgxGustavguezInputHolderComponent;
    exports.NgxGustavguezLoaderComponent = NgxGustavguezLoaderComponent;
    exports.NgxGustavguezMainContainerDirective = NgxGustavguezMainContainerDirective;
    exports.NgxGustavguezMainSidebarComponent = NgxGustavguezMainSidebarComponent;
    exports.NgxGustavguezNavComponent = NgxGustavguezNavComponent;
    exports.NgxGustavguezNavItemComponent = NgxGustavguezNavItemComponent;
    exports.NgxGustavguezPageHeaderComponent = NgxGustavguezPageHeaderComponent;
    exports.NgxGustavguezPopupComponent = NgxGustavguezPopupComponent;
    exports.NgxGustavguezPrettyDatePipe = NgxGustavguezPrettyDatePipe;
    exports.NgxGustavguezPrettyHourPipe = NgxGustavguezPrettyHourPipe;
    exports.NgxGustavguezPrettyNumberPipe = NgxGustavguezPrettyNumberPipe;
    exports.NgxGustavguezSelectComponent = NgxGustavguezSelectComponent;
    exports.NgxGustavguezSubmitComponent = NgxGustavguezSubmitComponent;
    exports.NgxGustavguezTableComponent = NgxGustavguezTableComponent;
    exports.NgxGustavguezTagsComponent = NgxGustavguezTagsComponent;
    exports.NgxGustavguezTextareaComponent = NgxGustavguezTextareaComponent;
    exports.NgxGustavguezToastsComponent = NgxGustavguezToastsComponent;
    exports.NumberUtility = NumberUtility;
    exports.StringUtility = StringUtility;
    exports.TableActionArgument = TableActionArgument;
    exports.TableActionModel = TableActionModel;
    exports.TableHeaderModel = TableHeaderModel;
    exports.TableOptionsModel = TableOptionsModel;
    exports.TableShowActionModel = TableShowActionModel;
    exports.ToastModel = ToastModel;
    exports.ToastsService = ToastsService;
    exports.WindowUtility = WindowUtility;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=gustavguez-ngx-core.umd.js.map
