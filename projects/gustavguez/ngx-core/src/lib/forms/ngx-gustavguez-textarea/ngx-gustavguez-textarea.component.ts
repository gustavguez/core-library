import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
	selector: 'ngx-gustavguez-textarea',
	templateUrl: './ngx-gustavguez-textarea.component.html',
	styleUrls: ['./ngx-gustavguez-textarea.component.scss']
})
export class NgxGustavguezTextareaComponent {
	// Inputs
	@Input() form: FormGroup;
	@Input() label: string;
	@Input() placeholder: string;
	@Input() controlId: string;
	@Input() controlName: string;
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
