import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
	selector: 'ngx-gustavguez-input',
	templateUrl: './ngx-gustavguez-input.component.html',
	styleUrls: ['./ngx-gustavguez-input.component.scss']
})
export class NgxGustavguezInputComponent {
	// Inputs
	@Input() form: FormGroup;
	@Input() label: string;
	@Input() placeholder: string;
	@Input() controlId: string;
	@Input() controlName: string;
	@Input() type: string;
	@Input() requiredErrorText: string;

	// Outputs
	@Output() onChange: EventEmitter<any> = new EventEmitter();

	// Custom events
	onEmitChange(): void {
		this.onChange.emit(
			this.form.get(this.controlName).value
		);
	}
}
