import { Injectable, EventEmitter } from '@angular/core';

import { ToastModel } from './toast.model';
import { StatusEnum } from '../../status.enum';

@Injectable({
	providedIn: 'root',
})
export class ToastsService {

	// Event emmiters
	public onToastAdded: EventEmitter<ToastModel> = new EventEmitter();

	// Methods
	public addError(message: string): void {
		// Open toast
		this.onToastAdded.emit(
			new ToastModel(message, StatusEnum.DANGER)
		);
	}

	public addSuccess(message: string): void {
		// Open toast
		this.onToastAdded.emit(
			new ToastModel(message, StatusEnum.SUCCESS)
		);
	}

}
