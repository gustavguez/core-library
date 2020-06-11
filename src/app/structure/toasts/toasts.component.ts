import { Component } from '@angular/core';

import { ToastsService } from 'projects/gustavguez/ngx-core/src/public-api';

@Component({
	selector: 'app-toasts',
	templateUrl: './toasts.component.html',
	styleUrls: ['./toasts.component.scss']
})
export class ToastsComponent {

	// Inject services
	constructor(
		private toastsService: ToastsService
	) { }

	// Custom events
	openSuccessToast(): void {
		this.toastsService.addSuccess('This is a success message!')
	}

	openErrorToast(): void {
		this.toastsService.addError('This is a error message!')
	}
}
