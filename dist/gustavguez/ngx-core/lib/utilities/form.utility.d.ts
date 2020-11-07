import { FormGroup } from '@angular/forms';
export declare class FormUtility {
    /**
     * Returns a form data object
     * @param json
     */
    static jsonToFormData(json: any): FormData;
    /**
     * Find an Blob or File object in json
     * @param json
     */
    static needFormData(json: any): boolean;
    /**
     * Trigger form validations
     * @param formGroup
     */
    static validateAllFormFields(formGroup: FormGroup): void;
}
