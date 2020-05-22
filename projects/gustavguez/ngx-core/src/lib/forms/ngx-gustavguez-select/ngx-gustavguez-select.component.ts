import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
	selector: 'ngx-gustavguez-select',
	templateUrl: './ngx-gustavguez-select.component.html',
	styleUrls: ['./ngx-gustavguez-select.component.scss']
})
export class NgxGustavguezSelectComponent {
	// Inputs
	@Input() form: FormGroup;
	@Input() label: string;
	@Input() controlId: string;
	@Input() controlName: string;
	@Input() requiredErrorText: string;

	@Input() options: string;
	@Input() placeholder: string;
	@Input() optionId: string;
	@Input() optionLabel: string;

	// Outputs
	@Output() onChange: EventEmitter<any> = new EventEmitter();

	// Custom events
	onEmitChange(): void {
		this.onChange.emit(
			this.form.get(this.controlName).value
		);
	}
}
