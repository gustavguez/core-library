import { Component, Input, Output, EventEmitter } from '@angular/core';
export class NgxGustavguezInputComponent {
    constructor() {
        // Outputs
        this.onChange = new EventEmitter();
    }
    // Custom events
    onEmitChange() {
        this.onChange.emit(this.form.get(this.controlName).value);
    }
}
NgxGustavguezInputComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-gustavguez-input',
                template: "<div class=\"input-group\" [formGroup]=\"form\">\n\t<ngx-gustavguez-input-holder\n\t\t[form]=\"form\"\n\t\t[controlName]=\"controlName\"\n\t\t[requiredErrorText]=\"requiredErrorText\">\n\t\t<label \n\t\t\t*ngIf=\"label\"\n\t\t\t[for]=\"controlId\">{{ label }}</label>\n\t\t<input \n\t\t\tclass=\"form-control\"\n\t\t\t(change)=\"onEmitChange()\"\n\t\t\t[id]=\"controlId\"\n\t\t\t[type]=\"type\"\n\t\t\t[placeholder]=\"placeholder\"\n\t\t\t[formControlName]=\"controlName\">\n\t</ngx-gustavguez-input-holder>\n</div>",
                styles: [""]
            },] }
];
NgxGustavguezInputComponent.propDecorators = {
    form: [{ type: Input }],
    label: [{ type: Input }],
    placeholder: [{ type: Input }],
    controlId: [{ type: Input }],
    controlName: [{ type: Input }],
    type: [{ type: Input }],
    requiredErrorText: [{ type: Input }],
    onChange: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWd1c3Rhdmd1ZXotaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZ3VzdGF2Z3Vlei9uZ3gtY29yZS9zcmMvbGliL2Zvcm1zL25neC1ndXN0YXZndWV6LWlucHV0L25neC1ndXN0YXZndWV6LWlucHV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUXZFLE1BQU0sT0FBTywyQkFBMkI7SUFMeEM7UUFlQyxVQUFVO1FBQ0EsYUFBUSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO0lBUTVELENBQUM7SUFOQSxnQkFBZ0I7SUFDaEIsWUFBWTtRQUNYLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNqQixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUNyQyxDQUFDO0lBQ0gsQ0FBQzs7O1lBdkJELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQywrZ0JBQW9EOzthQUVwRDs7O21CQUdDLEtBQUs7b0JBQ0wsS0FBSzswQkFDTCxLQUFLO3dCQUNMLEtBQUs7MEJBQ0wsS0FBSzttQkFDTCxLQUFLO2dDQUNMLEtBQUs7dUJBR0wsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ25neC1ndXN0YXZndWV6LWlucHV0Jyxcblx0dGVtcGxhdGVVcmw6ICcuL25neC1ndXN0YXZndWV6LWlucHV0LmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbJy4vbmd4LWd1c3Rhdmd1ZXotaW5wdXQuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hHdXN0YXZndWV6SW5wdXRDb21wb25lbnQge1xuXHQvLyBJbnB1dHNcblx0QElucHV0KCkgZm9ybTogRm9ybUdyb3VwO1xuXHRASW5wdXQoKSBsYWJlbDogc3RyaW5nO1xuXHRASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nO1xuXHRASW5wdXQoKSBjb250cm9sSWQ6IHN0cmluZztcblx0QElucHV0KCkgY29udHJvbE5hbWU6IHN0cmluZztcblx0QElucHV0KCkgdHlwZTogc3RyaW5nO1xuXHRASW5wdXQoKSByZXF1aXJlZEVycm9yVGV4dDogc3RyaW5nO1xuXG5cdC8vIE91dHB1dHNcblx0QE91dHB1dCgpIG9uQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvLyBDdXN0b20gZXZlbnRzXG5cdG9uRW1pdENoYW5nZSgpOiB2b2lkIHtcblx0XHR0aGlzLm9uQ2hhbmdlLmVtaXQoXG5cdFx0XHR0aGlzLmZvcm0uZ2V0KHRoaXMuY29udHJvbE5hbWUpLnZhbHVlXG5cdFx0KTtcblx0fVxufVxuIl19