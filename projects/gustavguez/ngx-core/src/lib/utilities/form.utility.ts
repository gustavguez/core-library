import { FormGroup, FormControl } from '@angular/forms';

export class FormUtility {

	/**
	 * Returns a form data object
	 * @param json
	 */
	static jsonToFormData(json: any): FormData {
		const fd = new FormData();

		for (const key in json) {
			if (json[key] instanceof Array) {
				json[key].forEach((jsonChild: any, index: number) => {
					fd.append(key + '[' + index + ']', jsonChild);
				});
			} else {
				fd.append(key, json[key]);
			}
		}
		return fd;
	}

	/**
	 * Find an Blob or File object in json
	 * @param json
	 */
	static needFormData(json: any): boolean {
		let need: boolean = false;
		for (const key in json) {
			if (json[key] instanceof File || json[key] instanceof Blob) {
				need = true;
				break;
			}
		}
		return need;
	}

	/**
	 * Trigger form validations
	 * @param formGroup
	 */
	static validateAllFormFields(formGroup: FormGroup): void {
		Object.keys(formGroup.controls).forEach((field: string) => {
			const control = formGroup.get(field);
			if (control instanceof FormControl) {
				control.markAsTouched({ onlySelf: true });
			} else if (control instanceof FormGroup) {
				this.validateAllFormFields(control);
			}
		});
	}
}
