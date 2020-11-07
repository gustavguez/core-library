import { Component, Input } from '@angular/core';
export class NgxGustavguezInputHolderComponent {
}
NgxGustavguezInputHolderComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-gustavguez-input-holder',
                template: "<div class=\"form-group\">\n    <!-- CONTAINER -->\n    <ng-content></ng-content>\n\n    <!-- VALIDATIONS -->\n    <div class=\"text-danger\" *ngIf=\"form\">\n        <small *ngIf=\"\n                form.get(controlName).touched \n                && form.get(controlName).errors\n                && form.get(controlName).errors.required\">\n            {{ requiredErrorText ? requiredErrorText : \"Este campo es requerido\"  }}\n        </small>\n    </div>\n</div>",
                host: { class: 'w-100' },
                styles: [""]
            },] }
];
NgxGustavguezInputHolderComponent.propDecorators = {
    form: [{ type: Input }],
    controlName: [{ type: Input }],
    requiredErrorText: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWd1c3Rhdmd1ZXotaW5wdXQtaG9sZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2d1c3Rhdmd1ZXovbmd4LWNvcmUvc3JjL2xpYi9mb3Jtcy9uZ3gtZ3VzdGF2Z3Vlei1pbnB1dC1ob2xkZXIvbmd4LWd1c3Rhdmd1ZXotaW5wdXQtaG9sZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVNqRCxNQUFNLE9BQU8saUNBQWlDOzs7WUFON0MsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSw2QkFBNkI7Z0JBQ3ZDLDhkQUEyRDtnQkFFM0QsSUFBSSxFQUFFLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRTs7YUFDeEI7OzttQkFHQyxLQUFLOzBCQUNMLEtBQUs7Z0NBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnbmd4LWd1c3Rhdmd1ZXotaW5wdXQtaG9sZGVyJyxcblx0dGVtcGxhdGVVcmw6ICcuL25neC1ndXN0YXZndWV6LWlucHV0LWhvbGRlci5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogWycuL25neC1ndXN0YXZndWV6LWlucHV0LWhvbGRlci5jb21wb25lbnQuc2NzcyddLFxuXHRob3N0OiB7IGNsYXNzOiAndy0xMDAnIH1cbn0pXG5leHBvcnQgY2xhc3MgTmd4R3VzdGF2Z3VleklucHV0SG9sZGVyQ29tcG9uZW50IHtcblx0Ly8gSW5wdXRzXG5cdEBJbnB1dCgpIGZvcm06IEZvcm1Hcm91cDtcblx0QElucHV0KCkgY29udHJvbE5hbWU6IHN0cmluZztcblx0QElucHV0KCkgcmVxdWlyZWRFcnJvclRleHQ6IHN0cmluZztcbn1cbiJdfQ==