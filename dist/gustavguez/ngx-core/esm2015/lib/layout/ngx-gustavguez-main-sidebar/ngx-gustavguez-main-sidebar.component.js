import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ArrayUtility } from '../../utilities/array.utility';
import { MainSidebarService } from './main-sidebar.service';
export class NgxGustavguezMainSidebarComponent {
    // Inject services
    constructor(mainSidebarService) {
        this.mainSidebarService = mainSidebarService;
        // Outputs
        this.onBrandLink = new EventEmitter();
    }
    // On component init
    ngOnInit() {
        // Init vars
        this.menuItemsStates = {};
    }
    // Custom events
    onMenuItemClick(menuItem) {
        // Check
        if (ArrayUtility.hasValue(menuItem.childs)) {
            // Toggle state
            this.menuItemsStates[menuItem.id] = menuItem.id in this.menuItemsStates ? !this.menuItemsStates[menuItem.id] : false;
        }
        else {
            // Close sidebar
            this.mainSidebarService.changeState(false);
        }
    }
    onBrandLinkClick(event) {
        event.preventDefault();
        // Close sidebar
        this.mainSidebarService.changeState(false);
        // Event emitter
        this.onBrandLink.emit();
    }
    onCloseSidebar() {
        this.mainSidebarService.changeState(false);
    }
}
NgxGustavguezMainSidebarComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-gustavguez-main-sidebar',
                template: "<aside class=\"main-sidebar sidebar-dark-primary\">\n    <!-- Brand Logo -->\n    <a \n        href=\"#\"\n        class=\"brand-link\"\n        (click)=\"onBrandLinkClick($event)\">\n        <img \n            *ngIf=\"brandImg\"\n            [src]=\"brandImg\" \n            [alt]=\"brandTitle\"\n            class=\"brand-image img-circle elevation-3\" style=\"opacity: .95\">\n        <span class=\"brand-text font-weight-light\">{{ brandTitle }}</span>\n    </a>\n\n    <!-- Sidebar -->\n    <div class=\"sidebar\">\n        <div \n            *ngIf=\"userIsLogged\"\n            class=\"user-panel mt-3 pb-3 mb-3 d-flex\">\n            <div class=\"image\">\n                <img \n                    *ngIf=\"userAvatar\"\n                    [src]=\"userAvatar\"\n                    [alt]=\"userName\"\n                    class=\"img-circle elevation-2\">\n            </div>\n            <div class=\"info\">\n                <a class=\"d-block\">{{ userName }}</a>\n            </div>\n        </div>\n\n        <!-- Sidebar Menu -->\n        <nav class=\"mt-2\">\n            <ul \n                *ngIf=\"menuItems\"\n                class=\"nav nav-pills nav-sidebar flex-column\" \n                data-widget=\"treeview\" \n                role=\"menu\">\n\n                <li class=\"nav-header\">MEN\u00DA</li>\n\n                <li \n                    [class.menu-open]=\"menuItemsStates[menuItem.id] || menuItemsStates[menuItem.id] === undefined\"\n                    class=\"nav-item has-treeview\"\n                    ngxGustavguezNavItem\n                    [navItem]=\"menuItem\" \n                    [isParent]=\"true\"\n                    [state]=\"menuItemsStates[menuItem.id] || menuItemsStates[menuItem.id] === undefined\"\n                    (onNavItem)=\"onMenuItemClick($event)\"\n                    *ngFor=\"let menuItem of menuItems\"></li>\n\n            </ul>\n        </nav>\n        <!-- /.sidebar-menu -->\n    </div>\n    <!-- /.sidebar -->\n</aside>\n<div id=\"sidebar-overlay\" (click)=\"onCloseSidebar()\"></div>",
                styles: [".main-sidebar .nav-treeview{background-color:#2d3339}"]
            },] }
];
NgxGustavguezMainSidebarComponent.ctorParameters = () => [
    { type: MainSidebarService }
];
NgxGustavguezMainSidebarComponent.propDecorators = {
    brandTitle: [{ type: Input }],
    brandImg: [{ type: Input }],
    userIsLogged: [{ type: Input }],
    userAvatar: [{ type: Input }],
    userName: [{ type: Input }],
    menuItems: [{ type: Input }],
    onBrandLink: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWd1c3Rhdmd1ZXotbWFpbi1zaWRlYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2d1c3Rhdmd1ZXovbmd4LWNvcmUvc3JjL2xpYi9sYXlvdXQvbmd4LWd1c3Rhdmd1ZXotbWFpbi1zaWRlYmFyL25neC1ndXN0YXZndWV6LW1haW4tc2lkZWJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUvRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFRNUQsTUFBTSxPQUFPLGlDQUFpQztJQWU3QyxrQkFBa0I7SUFDbEIsWUFDUyxrQkFBc0M7UUFBdEMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQVIvQyxVQUFVO1FBQ0EsZ0JBQVcsR0FBdUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQVEzRCxDQUFDO0lBRUwsb0JBQW9CO0lBQ3BCLFFBQVE7UUFDUCxZQUFZO1FBQ1osSUFBSSxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVELGdCQUFnQjtJQUNoQixlQUFlLENBQUMsUUFBc0I7UUFDckMsUUFBUTtRQUNSLElBQUksWUFBWSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDM0MsZUFBZTtZQUNmLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxFQUFFLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1NBQ3JIO2FBQU07WUFDTixnQkFBZ0I7WUFDaEIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUMzQztJQUNGLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxLQUFpQjtRQUNqQyxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFFdkIsZ0JBQWdCO1FBQ2hCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFM0MsZ0JBQWdCO1FBQ2hCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVELGNBQWM7UUFDYixJQUFJLENBQUMsa0JBQWtCLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVDLENBQUM7OztZQXZERCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLDZCQUE2QjtnQkFDdkMsOGhFQUEyRDs7YUFFM0Q7OztZQVBRLGtCQUFrQjs7O3lCQVV6QixLQUFLO3VCQUNMLEtBQUs7MkJBQ0wsS0FBSzt5QkFDTCxLQUFLO3VCQUNMLEtBQUs7d0JBQ0wsS0FBSzswQkFHTCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBBcnJheVV0aWxpdHkgfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvYXJyYXkudXRpbGl0eSc7XG5pbXBvcnQgeyBNYWluU2lkZWJhclNlcnZpY2UgfSBmcm9tICcuL21haW4tc2lkZWJhci5zZXJ2aWNlJztcbmltcG9ydCB7IE5hdkl0ZW1Nb2RlbCB9IGZyb20gJy4uL25neC1ndXN0YXZndWV6LW5hdi1pdGVtL25hdi1pdGVtLm1vZGVsJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnbmd4LWd1c3Rhdmd1ZXotbWFpbi1zaWRlYmFyJyxcblx0dGVtcGxhdGVVcmw6ICcuL25neC1ndXN0YXZndWV6LW1haW4tc2lkZWJhci5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogWycuL25neC1ndXN0YXZndWV6LW1haW4tc2lkZWJhci5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIE5neEd1c3Rhdmd1ZXpNYWluU2lkZWJhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cdC8vIElucHV0c1xuXHRASW5wdXQoKSBicmFuZFRpdGxlOiBzdHJpbmc7XG5cdEBJbnB1dCgpIGJyYW5kSW1nOiBzdHJpbmc7XG5cdEBJbnB1dCgpIHVzZXJJc0xvZ2dlZDogYm9vbGVhbjtcblx0QElucHV0KCkgdXNlckF2YXRhcjogc3RyaW5nO1xuXHRASW5wdXQoKSB1c2VyTmFtZTogc3RyaW5nO1xuXHRASW5wdXQoKSBtZW51SXRlbXM6IE5hdkl0ZW1Nb2RlbFtdO1xuXG5cdC8vIE91dHB1dHNcblx0QE91dHB1dCgpIG9uQnJhbmRMaW5rOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0Ly8gTW9kZWxzXG5cdG1lbnVJdGVtc1N0YXRlczogYW55O1xuXG5cdC8vIEluamVjdCBzZXJ2aWNlc1xuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIG1haW5TaWRlYmFyU2VydmljZTogTWFpblNpZGViYXJTZXJ2aWNlXG5cdCkgeyB9XG5cblx0Ly8gT24gY29tcG9uZW50IGluaXRcblx0bmdPbkluaXQoKTogdm9pZCB7XG5cdFx0Ly8gSW5pdCB2YXJzXG5cdFx0dGhpcy5tZW51SXRlbXNTdGF0ZXMgPSB7fTtcblx0fVxuXG5cdC8vIEN1c3RvbSBldmVudHNcblx0b25NZW51SXRlbUNsaWNrKG1lbnVJdGVtOiBOYXZJdGVtTW9kZWwpOiB2b2lkIHtcblx0XHQvLyBDaGVja1xuXHRcdGlmIChBcnJheVV0aWxpdHkuaGFzVmFsdWUobWVudUl0ZW0uY2hpbGRzKSkge1xuXHRcdFx0Ly8gVG9nZ2xlIHN0YXRlXG5cdFx0XHR0aGlzLm1lbnVJdGVtc1N0YXRlc1ttZW51SXRlbS5pZF0gPSBtZW51SXRlbS5pZCBpbiB0aGlzLm1lbnVJdGVtc1N0YXRlcyA/ICF0aGlzLm1lbnVJdGVtc1N0YXRlc1ttZW51SXRlbS5pZF0gOiBmYWxzZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gQ2xvc2Ugc2lkZWJhclxuXHRcdFx0dGhpcy5tYWluU2lkZWJhclNlcnZpY2UuY2hhbmdlU3RhdGUoZmFsc2UpO1xuXHRcdH1cblx0fVxuXG5cdG9uQnJhbmRMaW5rQ2xpY2soZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0Ly8gQ2xvc2Ugc2lkZWJhclxuXHRcdHRoaXMubWFpblNpZGViYXJTZXJ2aWNlLmNoYW5nZVN0YXRlKGZhbHNlKTtcblxuXHRcdC8vIEV2ZW50IGVtaXR0ZXJcblx0XHR0aGlzLm9uQnJhbmRMaW5rLmVtaXQoKTtcblx0fVxuXG5cdG9uQ2xvc2VTaWRlYmFyKCk6IHZvaWQge1xuXHRcdHRoaXMubWFpblNpZGViYXJTZXJ2aWNlLmNoYW5nZVN0YXRlKGZhbHNlKTtcblx0fVxuXG59XG4iXX0=