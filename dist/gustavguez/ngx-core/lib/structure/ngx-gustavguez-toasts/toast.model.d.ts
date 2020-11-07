import { StatusEnum } from '../../status.enum';
export declare class ToastModel {
    message: string;
    status: StatusEnum;
    id: string;
    timerInstance: any;
    constructor(message: string, status: StatusEnum);
}
