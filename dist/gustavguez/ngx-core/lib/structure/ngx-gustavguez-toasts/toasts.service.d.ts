import { EventEmitter } from '@angular/core';
import { ToastModel } from './toast.model';
export declare class ToastsService {
    onToastAdded: EventEmitter<ToastModel>;
    addError(message: string): void;
    addSuccess(message: string): void;
}
