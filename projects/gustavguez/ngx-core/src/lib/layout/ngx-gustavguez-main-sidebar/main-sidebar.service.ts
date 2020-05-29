import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class MainSidebarService {

	// Properties
	public onChangeState: EventEmitter<boolean> = new EventEmitter();
	public onToggleState: EventEmitter<void> = new EventEmitter();

	// Public methods
	public changeState(state: boolean): void {
		this.onChangeState.emit(state);
	}

	public toggleState(): void {
		this.onToggleState.emit();
	}

}
