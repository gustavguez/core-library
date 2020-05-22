import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormUtility } from 'projects/gustavguez/ngx-core/src/public-api';

@Component({
	selector: 'app-textarea',
	templateUrl: './textarea.component.html',
	styleUrls: ['./textarea.component.scss']
})
export class TextareaComponent implements OnInit {
	// Models
	form: FormGroup;

	// Inject services
	constructor(
		private formBuilder: FormBuilder) { }

	// On component init
	ngOnInit(): void {
		// Create form
		this.form = this.formBuilder.group({
			description: this.formBuilder.control('', Validators.required)
		});
	}

	// Custom events
	onSubmit(): void {
		// Is valid ?
		if (this.form.valid) {
			// Console log
			console.log(this.form.value);

			//Clear it
			this.form.reset();
		} else {
			// Use FormUtility class to trigger form validations
			FormUtility.validateAllFormFields(this.form);
		}
	}
}
