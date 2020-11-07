import { Component, Input, Output, EventEmitter } from '@angular/core';
export class NgxGustavguezSelectComponent {
    constructor() {
        // Outputs
        this.onChange = new EventEmitter();
    }
    // Custom events
    onEmitChange() {
        this.onChange.emit(this.form.get(this.controlName).value);
    }
}
NgxGustavguezSelectComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-gustavguez-select',
                template: "<div class=\"input-group\" [formGroup]=\"form\">\n\t<ngx-gustavguez-input-holder\n\t\t[form]=\"form\"\n\t\t[controlName]=\"controlName\"\n\t\t[requiredErrorText]=\"requiredErrorText\">\n\t\t<label \n\t\t\t*ngIf=\"label\"\n\t\t\t[for]=\"controlId\">{{ label }}</label>\n\t\t<select \n\t\t\tclass=\"custom-select\"\n\t\t\t(change)=\"onEmitChange()\"\n\t\t\t[id]=\"controlId\"\n\t\t\t[formControlName]=\"controlName\">\n\t\t\t<option \n\t\t\t\t[value]=\"null\" \n\t\t\t\tdisabled \n\t\t\t\tselected>{{ placeholder }}</option>\n\t\t\t<option \n\t\t\t\t*ngFor=\"let option of options\"\n\t\t\t\t[value]=\"option[optionId]\">{{ option[optionLabel] }}</option>\n\t\t</select>\n\t</ngx-gustavguez-input-holder>\n</div>",
                styles: [""]
            },] }
];
NgxGustavguezSelectComponent.propDecorators = {
    form: [{ type: Input }],
    label: [{ type: Input }],
    controlId: [{ type: Input }],
    controlName: [{ type: Input }],
    requiredErrorText: [{ type: Input }],
    options: [{ type: Input }],
    placeholder: [{ type: Input }],
    optionId: [{ type: Input }],
    optionLabel: [{ type: Input }],
    onChange: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWd1c3Rhdmd1ZXotc2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2d1c3Rhdmd1ZXovbmd4LWNvcmUvc3JjL2xpYi9mb3Jtcy9uZ3gtZ3VzdGF2Z3Vlei1zZWxlY3Qvbmd4LWd1c3Rhdmd1ZXotc2VsZWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUXZFLE1BQU0sT0FBTyw0QkFBNEI7SUFMekM7UUFrQkMsVUFBVTtRQUNBLGFBQVEsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQVE1RCxDQUFDO0lBTkEsZ0JBQWdCO0lBQ2hCLFlBQVk7UUFDWCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDakIsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEtBQUssQ0FDckMsQ0FBQztJQUNILENBQUM7OztZQTFCRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLHVCQUF1QjtnQkFDakMsa3RCQUFxRDs7YUFFckQ7OzttQkFHQyxLQUFLO29CQUNMLEtBQUs7d0JBQ0wsS0FBSzswQkFDTCxLQUFLO2dDQUNMLEtBQUs7c0JBRUwsS0FBSzswQkFDTCxLQUFLO3VCQUNMLEtBQUs7MEJBQ0wsS0FBSzt1QkFHTCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnbmd4LWd1c3Rhdmd1ZXotc2VsZWN0Jyxcblx0dGVtcGxhdGVVcmw6ICcuL25neC1ndXN0YXZndWV6LXNlbGVjdC5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogWycuL25neC1ndXN0YXZndWV6LXNlbGVjdC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIE5neEd1c3Rhdmd1ZXpTZWxlY3RDb21wb25lbnQge1xuXHQvLyBJbnB1dHNcblx0QElucHV0KCkgZm9ybTogRm9ybUdyb3VwO1xuXHRASW5wdXQoKSBsYWJlbDogc3RyaW5nO1xuXHRASW5wdXQoKSBjb250cm9sSWQ6IHN0cmluZztcblx0QElucHV0KCkgY29udHJvbE5hbWU6IHN0cmluZztcblx0QElucHV0KCkgcmVxdWlyZWRFcnJvclRleHQ6IHN0cmluZztcblxuXHRASW5wdXQoKSBvcHRpb25zOiBzdHJpbmc7XG5cdEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG5cdEBJbnB1dCgpIG9wdGlvbklkOiBzdHJpbmc7XG5cdEBJbnB1dCgpIG9wdGlvbkxhYmVsOiBzdHJpbmc7XG5cblx0Ly8gT3V0cHV0c1xuXHRAT3V0cHV0KCkgb25DaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8vIEN1c3RvbSBldmVudHNcblx0b25FbWl0Q2hhbmdlKCk6IHZvaWQge1xuXHRcdHRoaXMub25DaGFuZ2UuZW1pdChcblx0XHRcdHRoaXMuZm9ybS5nZXQodGhpcy5jb250cm9sTmFtZSkudmFsdWVcblx0XHQpO1xuXHR9XG59XG4iXX0=