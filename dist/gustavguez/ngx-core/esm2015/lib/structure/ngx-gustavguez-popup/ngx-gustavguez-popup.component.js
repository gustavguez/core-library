import { Component, EventEmitter, Input, Output } from '@angular/core';
export class NgxGustavguezPopupComponent {
    constructor() {
        this.onClose = new EventEmitter();
    }
    // Custome events
    onClosePopup() {
        this.onClose.emit();
    }
}
NgxGustavguezPopupComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-gustavguez-popup',
                template: "<!-- Modal -->\n<div \n    [class.show]=\"state\"\n    [class.d-block]=\"state\"\n    class=\"modal fade\">\n    <div class=\"modal-dialog\">\n\n        <div class=\"modal-content\">\n\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\">{{ titleText }}</h5>\n                \n                <button type=\"button\" class=\"close\" (click)=\"onClosePopup()\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n\n            <div class=\"modal-body\">\n                <ng-content></ng-content>\n            </div>\n\n            <div class=\"modal-footer\">\n                <button \n                    (click)=\"onClosePopup()\"\n                    type=\"button\" \n                    class=\"btn btn-secondary\">{{ closeText ? closeText : \"Cerrar\" }}</button>\n            </div>\n        </div>\n    </div>\n</div>\n<div \n\t*ngIf=\"state\"\n\t(click)=\"onClosePopup()\"\n    class=\"modal-backdrop fade show\"></div>",
                styles: [""]
            },] }
];
NgxGustavguezPopupComponent.propDecorators = {
    state: [{ type: Input }],
    titleText: [{ type: Input }],
    closeText: [{ type: Input }],
    onClose: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWd1c3Rhdmd1ZXotcG9wdXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZ3VzdGF2Z3Vlei9uZ3gtY29yZS9zcmMvbGliL3N0cnVjdHVyZS9uZ3gtZ3VzdGF2Z3Vlei1wb3B1cC9uZ3gtZ3VzdGF2Z3Vlei1wb3B1cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU92RSxNQUFNLE9BQU8sMkJBQTJCO0lBTHhDO1FBVVcsWUFBTyxHQUF1QixJQUFJLFlBQVksRUFBRSxDQUFDO0lBTzVELENBQUM7SUFMQSxpQkFBaUI7SUFDakIsWUFBWTtRQUNYLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDckIsQ0FBQzs7O1lBZkQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLDBnQ0FBb0Q7O2FBRXBEOzs7b0JBR0MsS0FBSzt3QkFDTCxLQUFLO3dCQUNMLEtBQUs7c0JBQ0wsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ25neC1ndXN0YXZndWV6LXBvcHVwJyxcblx0dGVtcGxhdGVVcmw6ICcuL25neC1ndXN0YXZndWV6LXBvcHVwLmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbJy4vbmd4LWd1c3Rhdmd1ZXotcG9wdXAuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hHdXN0YXZndWV6UG9wdXBDb21wb25lbnQge1xuXHQvLyBJbnB1dHMgYW5kIE91dHB1dHNcblx0QElucHV0KCkgc3RhdGU6IGJvb2xlYW47XG5cdEBJbnB1dCgpIHRpdGxlVGV4dDogc3RyaW5nO1xuXHRASW5wdXQoKSBjbG9zZVRleHQ6IHN0cmluZztcblx0QE91dHB1dCgpIG9uQ2xvc2U6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvLyBDdXN0b21lIGV2ZW50c1xuXHRvbkNsb3NlUG9wdXAoKTogdm9pZCB7XG5cdFx0dGhpcy5vbkNsb3NlLmVtaXQoKTtcblx0fVxuXG59XG4iXX0=