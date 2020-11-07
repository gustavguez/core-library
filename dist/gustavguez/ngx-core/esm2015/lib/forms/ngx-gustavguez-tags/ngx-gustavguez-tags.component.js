import { Component, Input, Output, EventEmitter } from '@angular/core';
export class NgxGustavguezTagsComponent {
    constructor() {
        // Outputs
        this.onSelect = new EventEmitter();
    }
    // Custom events
    onEmitSelect(option) {
        this.onSelect.emit(option);
    }
}
NgxGustavguezTagsComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-gustavguez-tags',
                template: "<div class=\"input-group pb-2\">\n\t<button \n\t\ttype=\"button\" \n\t\tclass=\"btn btn-danger btn-sm ml-1\"\n\t\t(click)=\"onEmitSelect(option)\"\n\t\t*ngFor=\"let option of options\">\n\t\t{{ option[optionLabel] }}\n\t</button>\n</div>",
                styles: [""]
            },] }
];
NgxGustavguezTagsComponent.propDecorators = {
    options: [{ type: Input }],
    optionLabel: [{ type: Input }],
    onSelect: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWd1c3Rhdmd1ZXotdGFncy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9ndXN0YXZndWV6L25neC1jb3JlL3NyYy9saWIvZm9ybXMvbmd4LWd1c3Rhdmd1ZXotdGFncy9uZ3gtZ3VzdGF2Z3Vlei10YWdzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBT3ZFLE1BQU0sT0FBTywwQkFBMEI7SUFMdkM7UUFVQyxVQUFVO1FBQ0EsYUFBUSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO0lBTTVELENBQUM7SUFKQSxnQkFBZ0I7SUFDaEIsWUFBWSxDQUFDLE1BQVc7UUFDdkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDNUIsQ0FBQzs7O1lBaEJELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUscUJBQXFCO2dCQUMvQix5UEFBbUQ7O2FBRW5EOzs7c0JBR0MsS0FBSzswQkFDTCxLQUFLO3VCQUdMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICduZ3gtZ3VzdGF2Z3Vlei10YWdzJyxcblx0dGVtcGxhdGVVcmw6ICcuL25neC1ndXN0YXZndWV6LXRhZ3MuY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFsnLi9uZ3gtZ3VzdGF2Z3Vlei10YWdzLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTmd4R3VzdGF2Z3VlelRhZ3NDb21wb25lbnQge1xuXHQvLyBJbnB1dHNcblx0QElucHV0KCkgb3B0aW9uczogc3RyaW5nO1xuXHRASW5wdXQoKSBvcHRpb25MYWJlbDogc3RyaW5nO1xuXG5cdC8vIE91dHB1dHNcblx0QE91dHB1dCgpIG9uU2VsZWN0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvLyBDdXN0b20gZXZlbnRzXG5cdG9uRW1pdFNlbGVjdChvcHRpb246IGFueSk6IHZvaWQge1xuXHRcdHRoaXMub25TZWxlY3QuZW1pdChvcHRpb24pO1xuXHR9XG59XG4iXX0=