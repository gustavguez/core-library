import { Component, Input, EventEmitter, Output } from '@angular/core';
export class NgxGustavguezButtonComponent {
    constructor() {
        // Output
        this.onClick = new EventEmitter();
    }
    // Custom events
    onDoClick() {
        this.onClick.emit();
    }
}
NgxGustavguezButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-gustavguez-button',
                template: "<button \n    type=\"button\" \n\tclass=\"btn btn-{{ status ? status : 'primary' }} btn-block\"\n\t(click)=\"onDoClick()\">\n    <span *ngIf=\"!loading\">{{ text }}</span>\n\n    <ngx-gustavguez-loader \n        [loadingText]=\"loadingText\"\n        [loading]=\"loading\"></ngx-gustavguez-loader>\n</button>",
                styles: [""]
            },] }
];
NgxGustavguezButtonComponent.propDecorators = {
    text: [{ type: Input }],
    loadingText: [{ type: Input }],
    loading: [{ type: Input }],
    status: [{ type: Input }],
    onClick: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWd1c3Rhdmd1ZXotYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2d1c3Rhdmd1ZXovbmd4LWNvcmUvc3JjL2xpYi9mb3Jtcy9uZ3gtZ3VzdGF2Z3Vlei1idXR0b24vbmd4LWd1c3Rhdmd1ZXotYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBU3ZFLE1BQU0sT0FBTyw0QkFBNEI7SUFMekM7UUFZQyxTQUFTO1FBQ0MsWUFBTyxHQUF1QixJQUFJLFlBQVksRUFBRSxDQUFDO0lBTTVELENBQUM7SUFKQSxnQkFBZ0I7SUFDaEIsU0FBUztRQUNSLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDckIsQ0FBQzs7O1lBbEJELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsdUJBQXVCO2dCQUNqQyxnVUFBcUQ7O2FBRXJEOzs7bUJBR0MsS0FBSzswQkFDTCxLQUFLO3NCQUNMLEtBQUs7cUJBQ0wsS0FBSztzQkFHTCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU3RhdHVzRW51bSB9IGZyb20gJy4uLy4uL3N0YXR1cy5lbnVtJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnbmd4LWd1c3Rhdmd1ZXotYnV0dG9uJyxcblx0dGVtcGxhdGVVcmw6ICcuL25neC1ndXN0YXZndWV6LWJ1dHRvbi5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogWycuL25neC1ndXN0YXZndWV6LWJ1dHRvbi5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIE5neEd1c3Rhdmd1ZXpCdXR0b25Db21wb25lbnQge1xuXHQvLyBJbnB1dFxuXHRASW5wdXQoKSB0ZXh0OiBzdHJpbmc7XG5cdEBJbnB1dCgpIGxvYWRpbmdUZXh0OiBzdHJpbmc7XG5cdEBJbnB1dCgpIGxvYWRpbmc6IHN0cmluZztcblx0QElucHV0KCkgc3RhdHVzOiBTdGF0dXNFbnVtO1xuXG5cdC8vIE91dHB1dFxuXHRAT3V0cHV0KCkgb25DbGljazogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8vIEN1c3RvbSBldmVudHNcblx0b25Eb0NsaWNrKCk6IHZvaWQge1xuXHRcdHRoaXMub25DbGljay5lbWl0KCk7XG5cdH1cbn1cbiJdfQ==