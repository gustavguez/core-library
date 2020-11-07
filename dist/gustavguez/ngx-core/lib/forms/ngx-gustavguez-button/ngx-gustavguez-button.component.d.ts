import { EventEmitter } from '@angular/core';
import { StatusEnum } from '../../status.enum';
export declare class NgxGustavguezButtonComponent {
    text: string;
    loadingText: string;
    loading: string;
    status: StatusEnum;
    onClick: EventEmitter<void>;
    onDoClick(): void;
}
