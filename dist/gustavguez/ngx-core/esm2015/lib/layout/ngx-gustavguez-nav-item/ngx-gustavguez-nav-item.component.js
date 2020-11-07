import { Component, Input, Output, EventEmitter } from '@angular/core';
export class NgxGustavguezNavItemComponent {
    constructor() {
        this.onNavItem = new EventEmitter();
    }
    // Custome events
    onNavItemClick(event) {
        event.preventDefault();
        this.onNavItem.emit(this.navItem);
    }
    onNavItemChild(child) {
        this.onNavItem.emit(child);
    }
}
NgxGustavguezNavItemComponent.decorators = [
    { type: Component, args: [{
                selector: '[ngxGustavguezNavItem]',
                template: "<a \n    *ngIf=\"navItem.isLink\"\n    (click)=\"onNavItemClick($event)\"\n    [routerLink]=\"navItem.action\"\n    routerLinkActive=\"active\"\n    href=\"#\" \n    class=\"nav-link\">\n    <i class=\"nav-icon {{ navItem.icon }}\"></i>\n    <p>\n        {{ navItem.display }}\n        <i *ngIf=\"isParent\" class=\"right fas fa-angle-left\"></i>\n    </p>\n</a>\n\n<a \n    *ngIf=\"!navItem.isLink\"\n    (click)=\"onNavItemClick($event)\"\n    href=\"#\" \n    class=\"nav-link\">\n    <i class=\"nav-icon {{ navItem.icon }}\"></i>\n    <p>\n        {{ navItem.display }}\n        <i *ngIf=\"isParent\" class=\"right fas fa-angle-left\"></i>\n    </p>\n</a>\n\n<ng-container *ngIf=\"navItem.childs\">\n    <ul \n        [style.display]=\"state ? 'block' : 'none'\"\n        class=\"nav nav-treeview\">\n        <li \n            class=\"nav-item\"\n            ngxGustavguezNavItem\n            (onNavItem)=\"onNavItemChild($event)\"\n            [navItem]=\"child\"\n            *ngFor=\"let child of navItem.childs\"></li>\n    </ul>\n</ng-container>",
                styles: [""]
            },] }
];
NgxGustavguezNavItemComponent.propDecorators = {
    navItem: [{ type: Input }],
    isParent: [{ type: Input }],
    state: [{ type: Input }],
    onNavItem: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWd1c3Rhdmd1ZXotbmF2LWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZ3VzdGF2Z3Vlei9uZ3gtY29yZS9zcmMvbGliL2xheW91dC9uZ3gtZ3VzdGF2Z3Vlei1uYXYtaXRlbS9uZ3gtZ3VzdGF2Z3Vlei1uYXYtaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVN2RSxNQUFNLE9BQU8sNkJBQTZCO0lBTDFDO1FBV1csY0FBUyxHQUErQixJQUFJLFlBQVksRUFBRSxDQUFDO0lBV3RFLENBQUM7SUFUQSxpQkFBaUI7SUFDakIsY0FBYyxDQUFDLEtBQWlCO1FBQy9CLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVELGNBQWMsQ0FBQyxLQUFtQjtRQUNqQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1QixDQUFDOzs7WUFyQkQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLDBpQ0FBdUQ7O2FBRXZEOzs7c0JBR0MsS0FBSzt1QkFDTCxLQUFLO29CQUNMLEtBQUs7d0JBRUwsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE5hdkl0ZW1Nb2RlbCB9IGZyb20gJy4vbmF2LWl0ZW0ubW9kZWwnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdbbmd4R3VzdGF2Z3Vlek5hdkl0ZW1dJyxcblx0dGVtcGxhdGVVcmw6ICcuL25neC1ndXN0YXZndWV6LW5hdi1pdGVtLmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbJy4vbmd4LWd1c3Rhdmd1ZXotbmF2LWl0ZW0uY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hHdXN0YXZndWV6TmF2SXRlbUNvbXBvbmVudCB7XG5cdC8vIElucHV0c1xuXHRASW5wdXQoKSBuYXZJdGVtOiBOYXZJdGVtTW9kZWw7XG5cdEBJbnB1dCgpIGlzUGFyZW50OiBib29sZWFuO1xuXHRASW5wdXQoKSBzdGF0ZTogYm9vbGVhbjtcblxuXHRAT3V0cHV0KCkgb25OYXZJdGVtOiBFdmVudEVtaXR0ZXI8TmF2SXRlbU1vZGVsPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvLyBDdXN0b21lIGV2ZW50c1xuXHRvbk5hdkl0ZW1DbGljayhldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0dGhpcy5vbk5hdkl0ZW0uZW1pdCh0aGlzLm5hdkl0ZW0pO1xuXHR9XG5cblx0b25OYXZJdGVtQ2hpbGQoY2hpbGQ6IE5hdkl0ZW1Nb2RlbCk6IHZvaWQge1xuXHRcdHRoaXMub25OYXZJdGVtLmVtaXQoY2hpbGQpO1xuXHR9XG59XG4iXX0=