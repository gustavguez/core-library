import { Component, Input, Output, EventEmitter } from '@angular/core';
export class NgxGustavguezTextareaComponent {
    constructor() {
        // Outputs
        this.onChange = new EventEmitter();
    }
    // Custom events
    onEmitChange() {
        this.onChange.emit(this.form.get(this.controlName).value);
    }
}
NgxGustavguezTextareaComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-gustavguez-textarea',
                template: "<div class=\"input-group\" [formGroup]=\"form\">\n\t<ngx-gustavguez-input-holder\n\t\t[form]=\"form\"\n\t\t[controlName]=\"controlName\"\n\t\t[requiredErrorText]=\"requiredErrorText\">\n\t\t<label \n\t\t\t*ngIf=\"label\"\n\t\t\t[for]=\"controlId\">{{ label }}</label>\n\t\t<textarea \n\t\t\tclass=\"form-control\"\n\t\t\t(change)=\"onEmitChange()\"\n\t\t\t[id]=\"controlId\"\n\t\t\t[placeholder]=\"placeholder\"\n\t\t\t[formControlName]=\"controlName\"></textarea>\n\t</ngx-gustavguez-input-holder>\n</div>",
                styles: [""]
            },] }
];
NgxGustavguezTextareaComponent.propDecorators = {
    form: [{ type: Input }],
    label: [{ type: Input }],
    placeholder: [{ type: Input }],
    controlId: [{ type: Input }],
    controlName: [{ type: Input }],
    requiredErrorText: [{ type: Input }],
    onChange: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWd1c3Rhdmd1ZXotdGV4dGFyZWEuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZ3VzdGF2Z3Vlei9uZ3gtY29yZS9zcmMvbGliL2Zvcm1zL25neC1ndXN0YXZndWV6LXRleHRhcmVhL25neC1ndXN0YXZndWV6LXRleHRhcmVhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUXZFLE1BQU0sT0FBTyw4QkFBOEI7SUFMM0M7UUFjQyxVQUFVO1FBQ0EsYUFBUSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO0lBUTVELENBQUM7SUFOQSxnQkFBZ0I7SUFDaEIsWUFBWTtRQUNYLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNqQixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUNyQyxDQUFDO0lBQ0gsQ0FBQzs7O1lBdEJELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUseUJBQXlCO2dCQUNuQyxzZ0JBQXVEOzthQUV2RDs7O21CQUdDLEtBQUs7b0JBQ0wsS0FBSzswQkFDTCxLQUFLO3dCQUNMLEtBQUs7MEJBQ0wsS0FBSztnQ0FDTCxLQUFLO3VCQUdMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICduZ3gtZ3VzdGF2Z3Vlei10ZXh0YXJlYScsXG5cdHRlbXBsYXRlVXJsOiAnLi9uZ3gtZ3VzdGF2Z3Vlei10ZXh0YXJlYS5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogWycuL25neC1ndXN0YXZndWV6LXRleHRhcmVhLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTmd4R3VzdGF2Z3VlelRleHRhcmVhQ29tcG9uZW50IHtcblx0Ly8gSW5wdXRzXG5cdEBJbnB1dCgpIGZvcm06IEZvcm1Hcm91cDtcblx0QElucHV0KCkgbGFiZWw6IHN0cmluZztcblx0QElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZztcblx0QElucHV0KCkgY29udHJvbElkOiBzdHJpbmc7XG5cdEBJbnB1dCgpIGNvbnRyb2xOYW1lOiBzdHJpbmc7XG5cdEBJbnB1dCgpIHJlcXVpcmVkRXJyb3JUZXh0OiBzdHJpbmc7XG5cblx0Ly8gT3V0cHV0c1xuXHRAT3V0cHV0KCkgb25DaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8vIEN1c3RvbSBldmVudHNcblx0b25FbWl0Q2hhbmdlKCk6IHZvaWQge1xuXHRcdHRoaXMub25DaGFuZ2UuZW1pdChcblx0XHRcdHRoaXMuZm9ybS5nZXQodGhpcy5jb250cm9sTmFtZSkudmFsdWVcblx0XHQpO1xuXHR9XG59XG4iXX0=