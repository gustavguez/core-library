import { EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
export declare class NgxGustavguezTextareaComponent {
    form: FormGroup;
    label: string;
    placeholder: string;
    controlId: string;
    controlName: string;
    requiredErrorText: string;
    onChange: EventEmitter<any>;
    onEmitChange(): void;
}
