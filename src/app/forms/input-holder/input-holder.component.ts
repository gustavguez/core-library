import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormUtility } from 'projects/ngx-gustavguez-core/src/public-api';

@Component({
	selector: 'app-input-holder',
	templateUrl: './input-holder.component.html',
	styleUrls: ['./input-holder.component.scss']
})
export class InputHolderComponent implements OnInit {
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
