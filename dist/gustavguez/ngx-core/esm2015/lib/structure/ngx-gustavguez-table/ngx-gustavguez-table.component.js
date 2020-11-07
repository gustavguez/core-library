import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TableActionArgument } from './table-action.argument';
export class NgxGustavguezTableComponent {
    constructor() {
        // Output
        this.onAction = new EventEmitter();
    }
    // Custom events
    onActionClick(action, model) {
        this.onAction.emit(new TableActionArgument(action, model));
    }
}
NgxGustavguezTableComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-gustavguez-table',
                template: "<table \n\t*ngIf=\"options\" \n\tclass=\"table table-striped table-bordered table-hover text-center table-sm\">\n\t<thead>\n\t\t<tr>\n\t\t\t<th *ngFor=\"let header of options.headers\">{{ header.display }}</th>\n\t\t\t<th *ngIf=\"options.actions && options.actions.length\"></th>\n\t\t</tr>\n\t</thead>\n\t<tbody *ngIf=\"items && items.length\">\n\t\t<tr *ngFor=\"let item of items\">\n\t\t\t<td \n\t\t\t\tclass=\"align-middle\"\n\t\t\t\t*ngFor=\"let field of options.fields\">\n\t\t\t\t<ng-container *ngTemplateOutlet=\"customTdTpl ? customTdTpl : defaultTdTpl; context: { field: field, model: item }\"></ng-container>\n\t\t\t</td>\n\t\t\t<td \n\t\t\t\tclass=\"align-middle\"\n\t\t\t\t*ngIf=\"options.actions && options.actions.length\">\n\t\t\t\t<ng-container *ngFor=\"let action of options.actions\">\n\t\t\t\t\t<button \n\t\t\t\t\t\t*ngIf=\"action.mustDisplay(item)\"\n\t\t\t\t\t\t[title]=\"action.text\"\n\t\t\t\t\t\t(click)=\"onActionClick(action, item)\"\n\t\t\t\t\t\tclass=\"btn btn-{{ action.status }} ml-1 {{ action.btnClasses }}\">\n\t\t\t\t\t\t<span *ngIf=\"action.icon\"><i [class]=\"action.icon\"></i></span>\n\t\t\t\t\t</button>\n\t\t\t\t</ng-container>\n\t\t\t\t\n\t\t\t</td>\n\t\t</tr>\n\t</tbody>\n</table>\n\n<!-- TEMPLATES -->\n<ng-template #defaultTdTpl let-model=\"model\" let-field=\"field\">\n\t{{ model[field] }}\n</ng-template>",
                styles: [""]
            },] }
];
NgxGustavguezTableComponent.propDecorators = {
    options: [{ type: Input }],
    items: [{ type: Input }],
    customTdTpl: [{ type: Input }],
    onAction: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWd1c3Rhdmd1ZXotdGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZ3VzdGF2Z3Vlei9uZ3gtY29yZS9zcmMvbGliL3N0cnVjdHVyZS9uZ3gtZ3VzdGF2Z3Vlei10YWJsZS9uZ3gtZ3VzdGF2Z3Vlei10YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBZSxNQUFNLGVBQWUsQ0FBQztBQUdwRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQVE5RCxNQUFNLE9BQU8sMkJBQTJCO0lBTHhDO1FBV0MsU0FBUztRQUNDLGFBQVEsR0FBc0MsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQVE1RSxDQUFDO0lBTkEsZ0JBQWdCO0lBQ2hCLGFBQWEsQ0FBQyxNQUF3QixFQUFFLEtBQVU7UUFDakQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ2pCLElBQUksbUJBQW1CLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUN0QyxDQUFDO0lBQ0gsQ0FBQzs7O1lBbkJELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQyxxMUNBQW9EOzthQUVwRDs7O3NCQUdDLEtBQUs7b0JBQ0wsS0FBSzswQkFDTCxLQUFLO3VCQUdMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgVGFibGVPcHRpb25zTW9kZWwgfSBmcm9tICcuL3RhYmxlLW9wdGlvbnMubW9kZWwnO1xuaW1wb3J0IHsgVGFibGVBY3Rpb25Bcmd1bWVudCB9IGZyb20gJy4vdGFibGUtYWN0aW9uLmFyZ3VtZW50JztcbmltcG9ydCB7IFRhYmxlQWN0aW9uTW9kZWwgfSBmcm9tICcuL3RhYmxlLWFjdGlvbi5tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ25neC1ndXN0YXZndWV6LXRhYmxlJyxcblx0dGVtcGxhdGVVcmw6ICcuL25neC1ndXN0YXZndWV6LXRhYmxlLmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbJy4vbmd4LWd1c3Rhdmd1ZXotdGFibGUuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hHdXN0YXZndWV6VGFibGVDb21wb25lbnQge1xuXHQvLyBJbnB1dHNcblx0QElucHV0KCkgb3B0aW9uczogVGFibGVPcHRpb25zTW9kZWw7XG5cdEBJbnB1dCgpIGl0ZW1zOiBhbnlbXTtcblx0QElucHV0KCkgY3VzdG9tVGRUcGw6IFRlbXBsYXRlUmVmPGFueT47XG5cblx0Ly8gT3V0cHV0XG5cdEBPdXRwdXQoKSBvbkFjdGlvbjogRXZlbnRFbWl0dGVyPFRhYmxlQWN0aW9uQXJndW1lbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8vIEN1c3RvbSBldmVudHNcblx0b25BY3Rpb25DbGljayhhY3Rpb246IFRhYmxlQWN0aW9uTW9kZWwsIG1vZGVsOiBhbnkpOiB2b2lkIHtcblx0XHR0aGlzLm9uQWN0aW9uLmVtaXQoXG5cdFx0XHRuZXcgVGFibGVBY3Rpb25Bcmd1bWVudChhY3Rpb24sIG1vZGVsKVxuXHRcdCk7XG5cdH1cbn1cbiJdfQ==