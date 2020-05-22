import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormUtility } from 'projects/ngx-gustavguez-core/src/public-api';

@Component({
	selector: 'app-tags',
	templateUrl: './tags.component.html',
	styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {

	// Models
	form: FormGroup;
	options: any[];
	suggestedOptions: any[];

	// Inject services
	constructor(
		private formBuilder: FormBuilder) { }

	// On component init
	ngOnInit(): void {
		// Create form
		this.form = this.formBuilder.group({
			option: this.formBuilder.control(null, Validators.required)
		});

		// Create options
		this.options = [
			{ id: 1, name: "Gustavo" },
			{ id: 2, name: "Daiana" },
			{ id: 3, name: "Mariana" },
			{ id: 4, name: "Lorena" }
		];
		this.suggestedOptions = [
			{ id: 1, name: "Gustavo" },
			{ id: 2, name: "Daiana" }
		];
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

	onSelect(option: any): void {
		this.form.patchValue({
			option: option.id
		});
	}
}
