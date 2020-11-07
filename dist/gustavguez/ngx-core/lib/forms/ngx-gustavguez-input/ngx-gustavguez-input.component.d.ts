import { EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
export declare class NgxGustavguezInputComponent {
    form: FormGroup;
    label: string;
    placeholder: string;
    controlId: string;
    controlName: string;
    type: string;
    requiredErrorText: string;
    onChange: EventEmitter<any>;
    onEmitChange(): void;
}
