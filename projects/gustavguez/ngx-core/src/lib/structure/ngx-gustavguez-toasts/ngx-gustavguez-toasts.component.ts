import { Component, OnInit, Input } from '@angular/core';

import { ToastModel } from './toast.model';
import { ToastsService } from './toasts.service';
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
	toasts: ToastModel[] = [];

	// Inject services
	constructor(
		private toastsService: ToastsService) { }

	// On component init
	ngOnInit(): void {
		// Watch toast added
		this.toastsService.onToastAdded.subscribe((toast: ToastModel) => {
			this.openToast(toast);
		});
	}

	// Custom events
	onCloseToast(toast: ToastModel): void {
		this.closeToast(toast);
	}

	// Private methods
	private openToast(toast: ToastModel): void {
		// Before push create timeout
		toast.timerInstance = setTimeout(() => {
			this.closeToast(toast);
		}, 3000);

		// push
		this.toasts.unshift(toast);
	}

	private closeToast(toast: ToastModel): void {
		// Check
		if (toast instanceof ToastModel) {
			ArrayUtility.find(this.toasts, toast.id, (toastFound: ToastModel, index: number) => {
				// Clear timer instance
				clearTimeout(toastFound.timerInstance);

				// Remove from array
				this.toasts.splice(index, 1);
			});
		}
	}
}
