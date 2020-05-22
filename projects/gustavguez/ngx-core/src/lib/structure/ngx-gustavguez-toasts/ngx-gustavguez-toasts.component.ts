import { Component, OnInit, Input } from '@angular/core';

import { NgxGustavguezToastModel } from './ngx-gustavguez-toast.model';
import { NgxGustavguezToastsService } from './ngx-gustavguez-toasts.service';
import { ArrayUtility } from '../../utilities/array.utility';

@Component({
	selector: 'ngx-gustavguez-toasts',
	templateUrl: './ngx-gustavguez-toasts.component.html',
	styleUrls: ['./ngx-gustavguez-toasts.component.scss']
})
export class NgxGustavguezToastsComponent implements OnInit {
	// Inputs
	@Input() brandTitle: string;

	// Models
	toasts: NgxGustavguezToastModel[] = [];

	// Inject services
	constructor(
		private ngxGustavguezToastsService: NgxGustavguezToastsService) { }

	// On component init
	ngOnInit(): void {
		// Watch toast added
		this.ngxGustavguezToastsService.onToastAdded.subscribe((toast: NgxGustavguezToastModel) => {
			this.openToast(toast);
		});
	}

	// Custom events
	onCloseToast(toast: NgxGustavguezToastModel): void {
		this.closeToast(toast);
	}

	// Private methods
	private openToast(toast: NgxGustavguezToastModel): void {
		// Before push create timeout
		toast.timerInstance = setTimeout(() => {
			this.closeToast(toast);
		}, 3000);

		// push
		this.toasts.unshift(toast);
	}

	private closeToast(toast: NgxGustavguezToastModel): void {
		// Check
		if (toast instanceof NgxGustavguezToastModel) {
			ArrayUtility.find(this.toasts, toast.id, (toastFound: NgxGustavguezToastModel, index: number) => {
				// Clear timer instance
				clearTimeout(toastFound.timerInstance);

				// Remove from array
				this.toasts.splice(index, 1);
			});
		}
	}
}
