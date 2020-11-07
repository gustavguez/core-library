import { EventEmitter, TemplateRef } from '@angular/core';
import { TableOptionsModel } from './table-options.model';
import { TableActionArgument } from './table-action.argument';
import { TableActionModel } from './table-action.model';
export declare class NgxGustavguezTableComponent {
    options: TableOptionsModel;
    items: any[];
    customTdTpl: TemplateRef<any>;
    onAction: EventEmitter<TableActionArgument>;
    onActionClick(action: TableActionModel, model: any): void;
}
