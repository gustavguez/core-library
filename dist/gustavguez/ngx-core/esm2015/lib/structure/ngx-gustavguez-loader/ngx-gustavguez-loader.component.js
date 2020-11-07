import { Component, Input } from '@angular/core';
export class NgxGustavguezLoaderComponent {
}
NgxGustavguezLoaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-gustavguez-loader',
                template: "<ng-container *ngIf=\"loading\">\n\t<span class=\"spinner-border spinner-border-sm\" role=\"status\" aria-hidden=\"true\"></span>\n\t<span class=\"sr-only\">{{ loadingText ? loadingText : \"Cargando...\" }}</span>\n</ng-container>",
                styles: [""]
            },] }
];
NgxGustavguezLoaderComponent.propDecorators = {
    loading: [{ type: Input }],
    loadingText: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWd1c3Rhdmd1ZXotbG9hZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2d1c3Rhdmd1ZXovbmd4LWNvcmUvc3JjL2xpYi9zdHJ1Y3R1cmUvbmd4LWd1c3Rhdmd1ZXotbG9hZGVyL25neC1ndXN0YXZndWV6LWxvYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPakQsTUFBTSxPQUFPLDRCQUE0Qjs7O1lBTHhDLFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsdUJBQXVCO2dCQUNqQyxrUEFBcUQ7O2FBRXJEOzs7c0JBR0MsS0FBSzswQkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICduZ3gtZ3VzdGF2Z3Vlei1sb2FkZXInLFxuXHR0ZW1wbGF0ZVVybDogJy4vbmd4LWd1c3Rhdmd1ZXotbG9hZGVyLmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbJy4vbmd4LWd1c3Rhdmd1ZXotbG9hZGVyLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTmd4R3VzdGF2Z3VlekxvYWRlckNvbXBvbmVudCB7XG5cdC8vIElucHV0c1xuXHRASW5wdXQoKSBsb2FkaW5nOiBib29sZWFuO1xuXHRASW5wdXQoKSBsb2FkaW5nVGV4dDogc3RyaW5nO1xufVxuIl19