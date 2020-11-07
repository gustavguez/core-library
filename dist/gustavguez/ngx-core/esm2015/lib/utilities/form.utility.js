import { FormGroup, FormControl } from '@angular/forms';
export class FormUtility {
    /**
     * Returns a form data object
     * @param json
     */
    static jsonToFormData(json) {
        const fd = new FormData();
        for (const key in json) {
            if (json[key] instanceof Array) {
                json[key].forEach((jsonChild, index) => {
                    fd.append(key + '[' + index + ']', jsonChild);
                });
            }
            else {
                fd.append(key, json[key]);
            }
        }
        return fd;
    }
    /**
     * Find an Blob or File object in json
     * @param json
     */
    static needFormData(json) {
        let need = false;
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
    static validateAllFormFields(formGroup) {
        Object.keys(formGroup.controls).forEach((field) => {
            const control = formGroup.get(field);
            if (control instanceof FormControl) {
                control.markAsTouched({ onlySelf: true });
            }
            else if (control instanceof FormGroup) {
                this.validateAllFormFields(control);
            }
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS51dGlsaXR5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZ3VzdGF2Z3Vlei9uZ3gtY29yZS9zcmMvbGliL3V0aWxpdGllcy9mb3JtLnV0aWxpdHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV4RCxNQUFNLE9BQU8sV0FBVztJQUV2Qjs7O09BR0c7SUFDSCxNQUFNLENBQUMsY0FBYyxDQUFDLElBQVM7UUFDOUIsTUFBTSxFQUFFLEdBQUcsSUFBSSxRQUFRLEVBQUUsQ0FBQztRQUUxQixLQUFLLE1BQU0sR0FBRyxJQUFJLElBQUksRUFBRTtZQUN2QixJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxLQUFLLEVBQUU7Z0JBQy9CLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFjLEVBQUUsS0FBYSxFQUFFLEVBQUU7b0JBQ25ELEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxLQUFLLEdBQUcsR0FBRyxFQUFFLFNBQVMsQ0FBQyxDQUFDO2dCQUMvQyxDQUFDLENBQUMsQ0FBQzthQUNIO2lCQUFNO2dCQUNOLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2FBQzFCO1NBQ0Q7UUFDRCxPQUFPLEVBQUUsQ0FBQztJQUNYLENBQUM7SUFFRDs7O09BR0c7SUFDSCxNQUFNLENBQUMsWUFBWSxDQUFDLElBQVM7UUFDNUIsSUFBSSxJQUFJLEdBQVksS0FBSyxDQUFDO1FBQzFCLEtBQUssTUFBTSxHQUFHLElBQUksSUFBSSxFQUFFO1lBQ3ZCLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLElBQUksSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksSUFBSSxFQUFFO2dCQUMzRCxJQUFJLEdBQUcsSUFBSSxDQUFDO2dCQUNaLE1BQU07YUFDTjtTQUNEO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDYixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsTUFBTSxDQUFDLHFCQUFxQixDQUFDLFNBQW9CO1FBQ2hELE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQWEsRUFBRSxFQUFFO1lBQ3pELE1BQU0sT0FBTyxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDckMsSUFBSSxPQUFPLFlBQVksV0FBVyxFQUFFO2dCQUNuQyxPQUFPLENBQUMsYUFBYSxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7YUFDMUM7aUJBQU0sSUFBSSxPQUFPLFlBQVksU0FBUyxFQUFFO2dCQUN4QyxJQUFJLENBQUMscUJBQXFCLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDcEM7UUFDRixDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7Q0FDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmV4cG9ydCBjbGFzcyBGb3JtVXRpbGl0eSB7XG5cblx0LyoqXG5cdCAqIFJldHVybnMgYSBmb3JtIGRhdGEgb2JqZWN0XG5cdCAqIEBwYXJhbSBqc29uXG5cdCAqL1xuXHRzdGF0aWMganNvblRvRm9ybURhdGEoanNvbjogYW55KTogRm9ybURhdGEge1xuXHRcdGNvbnN0IGZkID0gbmV3IEZvcm1EYXRhKCk7XG5cblx0XHRmb3IgKGNvbnN0IGtleSBpbiBqc29uKSB7XG5cdFx0XHRpZiAoanNvbltrZXldIGluc3RhbmNlb2YgQXJyYXkpIHtcblx0XHRcdFx0anNvbltrZXldLmZvckVhY2goKGpzb25DaGlsZDogYW55LCBpbmRleDogbnVtYmVyKSA9PiB7XG5cdFx0XHRcdFx0ZmQuYXBwZW5kKGtleSArICdbJyArIGluZGV4ICsgJ10nLCBqc29uQ2hpbGQpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZkLmFwcGVuZChrZXksIGpzb25ba2V5XSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBmZDtcblx0fVxuXG5cdC8qKlxuXHQgKiBGaW5kIGFuIEJsb2Igb3IgRmlsZSBvYmplY3QgaW4ganNvblxuXHQgKiBAcGFyYW0ganNvblxuXHQgKi9cblx0c3RhdGljIG5lZWRGb3JtRGF0YShqc29uOiBhbnkpOiBib29sZWFuIHtcblx0XHRsZXQgbmVlZDogYm9vbGVhbiA9IGZhbHNlO1xuXHRcdGZvciAoY29uc3Qga2V5IGluIGpzb24pIHtcblx0XHRcdGlmIChqc29uW2tleV0gaW5zdGFuY2VvZiBGaWxlIHx8IGpzb25ba2V5XSBpbnN0YW5jZW9mIEJsb2IpIHtcblx0XHRcdFx0bmVlZCA9IHRydWU7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gbmVlZDtcblx0fVxuXG5cdC8qKlxuXHQgKiBUcmlnZ2VyIGZvcm0gdmFsaWRhdGlvbnNcblx0ICogQHBhcmFtIGZvcm1Hcm91cFxuXHQgKi9cblx0c3RhdGljIHZhbGlkYXRlQWxsRm9ybUZpZWxkcyhmb3JtR3JvdXA6IEZvcm1Hcm91cCk6IHZvaWQge1xuXHRcdE9iamVjdC5rZXlzKGZvcm1Hcm91cC5jb250cm9scykuZm9yRWFjaCgoZmllbGQ6IHN0cmluZykgPT4ge1xuXHRcdFx0Y29uc3QgY29udHJvbCA9IGZvcm1Hcm91cC5nZXQoZmllbGQpO1xuXHRcdFx0aWYgKGNvbnRyb2wgaW5zdGFuY2VvZiBGb3JtQ29udHJvbCkge1xuXHRcdFx0XHRjb250cm9sLm1hcmtBc1RvdWNoZWQoeyBvbmx5U2VsZjogdHJ1ZSB9KTtcblx0XHRcdH0gZWxzZSBpZiAoY29udHJvbCBpbnN0YW5jZW9mIEZvcm1Hcm91cCkge1xuXHRcdFx0XHR0aGlzLnZhbGlkYXRlQWxsRm9ybUZpZWxkcyhjb250cm9sKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxufVxuIl19