import { EventEmitter } from '@angular/core';

export class PopupService {
	public onStateChange: EventEmitter<boolean> = new EventEmitter();

	public changeState(state: boolean): void {
		this.onStateChange.emit(state);
	}
}
