import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MainSidebarService } from '../ngx-gustavguez-main-sidebar/main-sidebar.service';
export class NgxGustavguezNavComponent {
    // Inject services
    constructor(mainSidebarService) {
        this.mainSidebarService = mainSidebarService;
        // Outputs
        this.onLogout = new EventEmitter();
        this.onBrand = new EventEmitter();
    }
    // Custom events
    onToggleMenu(event) {
        event.preventDefault();
        this.mainSidebarService.toggleState();
    }
    onToggleUserMenu(event) {
        event.preventDefault();
        this.userMenuState = !this.userMenuState;
    }
    onLogoutClick(event) {
        event.preventDefault();
        // Emit logout
        this.onLogout.emit();
        // Close user menu
        this.userMenuState = false;
    }
    onBrandLink(event) {
        event.preventDefault();
        this.onBrand.emit();
    }
}
NgxGustavguezNavComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-gustavguez-nav',
                template: "<!-- NAV -->\n<nav class=\"main-header navbar navbar-expand navbar-white navbar-light\">\n    <!-- Left navbar links -->\n    <ul class=\"navbar-nav\">\n        <li class=\"nav-item\">\n            <a  \n                href=\"#\"\n                (click)=\"onToggleMenu($event)\"\n                class=\"nav-link\" \n                data-widget=\"pushmenu\">\n                <i class=\"fas fa-bars\"></i>\n            </a>\n        </li>\n        <li class=\"nav-item d-lg-none\" *ngIf=\"brandTitle\">\n            <a \n                href=\"#\" \n                class=\"nav-link\"\n                (click)=\"onBrandLink($event)\">\n                {{ brandTitle }}\n            </a>\n        </li>\n    </ul>\n\n    <!-- Right navbar links -->\n    <ul class=\"navbar-nav ml-auto\" *ngIf=\"userIsLogged\">\n        <!-- Notifications Dropdown Menu -->\n        <li class=\"nav-item dropdown\">\n\n            <a \n                href=\"#\"\n                (click)=\"onToggleUserMenu($event)\"\n                class=\"nav-link\" \n                data-toggle=\"dropdown\">\n                <i class=\"fas fa-cog\"></i>\n            </a>\n\n            <!-- .show to display -->\n            <div \n                [class.show]=\"userMenuState\"\n                class=\"dropdown-menu dropdown-menu-lg dropdown-menu-right\">\n                <span class=\"dropdown-item dropdown-header\">{{ userMenuText ? userMenuText : \"Men\u00FA de usuario\" }}</span>\n                <div class=\"dropdown-divider\"></div>\n                <a \n                    href=\"#\"\n                    class=\"dropdown-item\" \n                    (click)=\"onLogoutClick($event)\">\n                    <i class=\"fas fa-sign-out-alt\"></i> {{ userMenuLogoutText ? userMenuLogoutText : \"Cerrar sesi\u00F3n\" }}\n                </a>\n            </div>\n        </li>\n    </ul>\n</nav>",
                styles: [""]
            },] }
];
NgxGustavguezNavComponent.ctorParameters = () => [
    { type: MainSidebarService }
];
NgxGustavguezNavComponent.propDecorators = {
    brandTitle: [{ type: Input }],
    userIsLogged: [{ type: Input }],
    userMenuText: [{ type: Input }],
    userMenuLogoutText: [{ type: Input }],
    onLogout: [{ type: Output }],
    onBrand: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWd1c3Rhdmd1ZXotbmF2LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2d1c3Rhdmd1ZXovbmd4LWNvcmUvc3JjL2xpYi9sYXlvdXQvbmd4LWd1c3Rhdmd1ZXotbmF2L25neC1ndXN0YXZndWV6LW5hdi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQU96RixNQUFNLE9BQU8seUJBQXlCO0lBY3JDLGtCQUFrQjtJQUNsQixZQUNTLGtCQUFzQztRQUF0Qyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBVC9DLFVBQVU7UUFDQSxhQUFRLEdBQXVCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbEQsWUFBTyxHQUF1QixJQUFJLFlBQVksRUFBRSxDQUFDO0lBT1IsQ0FBQztJQUVwRCxnQkFBZ0I7SUFDaEIsWUFBWSxDQUFDLEtBQWlCO1FBQzdCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsa0JBQWtCLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDdkMsQ0FBQztJQUVELGdCQUFnQixDQUFDLEtBQWlCO1FBQ2pDLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUMxQyxDQUFDO0lBRUQsYUFBYSxDQUFDLEtBQWlCO1FBQzlCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixjQUFjO1FBQ2QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUVyQixrQkFBa0I7UUFDbEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFDNUIsQ0FBQztJQUVELFdBQVcsQ0FBQyxLQUFpQjtRQUM1QixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNyQixDQUFDOzs7WUE5Q0QsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLG0yREFBa0Q7O2FBRWxEOzs7WUFOUSxrQkFBa0I7Ozt5QkFTekIsS0FBSzsyQkFDTCxLQUFLOzJCQUNMLEtBQUs7aUNBQ0wsS0FBSzt1QkFHTCxNQUFNO3NCQUNOLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWFpblNpZGViYXJTZXJ2aWNlIH0gZnJvbSAnLi4vbmd4LWd1c3Rhdmd1ZXotbWFpbi1zaWRlYmFyL21haW4tc2lkZWJhci5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnbmd4LWd1c3Rhdmd1ZXotbmF2Jyxcblx0dGVtcGxhdGVVcmw6ICcuL25neC1ndXN0YXZndWV6LW5hdi5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogWycuL25neC1ndXN0YXZndWV6LW5hdi5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIE5neEd1c3Rhdmd1ZXpOYXZDb21wb25lbnQge1xuXHQvLyBJbnB1dHNcblx0QElucHV0KCkgYnJhbmRUaXRsZTogc3RyaW5nO1xuXHRASW5wdXQoKSB1c2VySXNMb2dnZWQ6IGJvb2xlYW47XG5cdEBJbnB1dCgpIHVzZXJNZW51VGV4dDogc3RyaW5nO1xuXHRASW5wdXQoKSB1c2VyTWVudUxvZ291dFRleHQ6IHN0cmluZztcblxuXHQvLyBPdXRwdXRzXG5cdEBPdXRwdXQoKSBvbkxvZ291dDogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXHRAT3V0cHV0KCkgb25CcmFuZDogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8vIE1vZGVsc1xuXHR1c2VyTWVudVN0YXRlOiBib29sZWFuO1xuXG5cdC8vIEluamVjdCBzZXJ2aWNlc1xuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIG1haW5TaWRlYmFyU2VydmljZTogTWFpblNpZGViYXJTZXJ2aWNlKSB7IH1cblxuXHQvLyBDdXN0b20gZXZlbnRzXG5cdG9uVG9nZ2xlTWVudShldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0dGhpcy5tYWluU2lkZWJhclNlcnZpY2UudG9nZ2xlU3RhdGUoKTtcblx0fVxuXG5cdG9uVG9nZ2xlVXNlck1lbnUoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdHRoaXMudXNlck1lbnVTdGF0ZSA9ICF0aGlzLnVzZXJNZW51U3RhdGU7XG5cdH1cblxuXHRvbkxvZ291dENsaWNrKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHQvLyBFbWl0IGxvZ291dFxuXHRcdHRoaXMub25Mb2dvdXQuZW1pdCgpO1xuXG5cdFx0Ly8gQ2xvc2UgdXNlciBtZW51XG5cdFx0dGhpcy51c2VyTWVudVN0YXRlID0gZmFsc2U7XG5cdH1cblxuXHRvbkJyYW5kTGluayhldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0dGhpcy5vbkJyYW5kLmVtaXQoKTtcblx0fVxufVxuIl19