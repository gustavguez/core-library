import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
	selector: 'ngx-gustavguez-input-holder',
	templateUrl: './ngx-gustavguez-input-holder.component.html',
	styleUrls: ['./ngx-gustavguez-input-holder.component.scss'],
	host: { class: 'w-100' }
})
export class NgxGustavguezInputHolderComponent {
	// Inputs
	@Input() form: FormGroup;
	@Input() controlName: string;
	@Input() requiredErrorText: string;
}
