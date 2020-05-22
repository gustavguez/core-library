import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'ngx-gustavguez-popup',
	templateUrl: './ngx-gustavguez-popup.component.html',
	styleUrls: ['./ngx-gustavguez-popup.component.scss']
})
export class NgxGustavguezPopupComponent {
	// Inputs and Outputs
	@Input() state: boolean;
	@Input() titleText: string;
	@Input() closeText: string;
	@Output() onClose: EventEmitter<void> = new EventEmitter();

	// Custome events
	onClosePopup(): void {
		this.onClose.emit();
	}

}
