import { EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
export declare class NgxGustavguezSelectComponent {
    form: FormGroup;
    label: string;
    controlId: string;
    controlName: string;
    requiredErrorText: string;
    options: string;
    placeholder: string;
    optionId: string;
    optionLabel: string;
    onChange: EventEmitter<any>;
    onEmitChange(): void;
}
