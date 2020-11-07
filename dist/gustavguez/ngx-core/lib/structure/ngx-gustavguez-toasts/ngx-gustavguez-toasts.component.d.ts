import { OnInit } from '@angular/core';
import { ToastModel } from './toast.model';
import { ToastsService } from './toasts.service';
export declare class NgxGustavguezToastsComponent implements OnInit {
    private toastsService;
    brandTitle: string;
    toasts: ToastModel[];
    constructor(toastsService: ToastsService);
    ngOnInit(): void;
    onCloseToast(toast: ToastModel): void;
    private openToast;
    private closeToast;
}
