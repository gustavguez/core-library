import { StatusEnum } from '../../status.enum';
export declare class TableActionModel {
    icon?: string;
    text?: string;
    mustDisplayCallback?: (model: any) => boolean;
    btnClasses: string;
    status: StatusEnum;
    constructor(icon?: string, text?: string, mustDisplayCallback?: (model: any) => boolean);
    mustDisplay(model: any): boolean;
}
