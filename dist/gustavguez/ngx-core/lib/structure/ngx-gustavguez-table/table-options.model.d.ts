import { TableHeaderModel } from './table-header.model';
import { TableActionModel } from './table-action.model';
export declare class TableOptionsModel {
    headers: TableHeaderModel[];
    fields: string[];
    actions: TableActionModel[];
    constructor(headers: TableHeaderModel[], fields: string[]);
}
