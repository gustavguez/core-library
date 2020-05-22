import { Component } from '@angular/core';

@Component({
	selector: 'app-popup',
	templateUrl: './popup.component.html',
	styleUrls: ['./popup.component.scss']
})
export class PopupComponent {
	// Models
	popupState: boolean;

	// Custom events
	onOpenPopup(): void {
		this.popupState = true;
	}

	onClosePopup(): void {
		this.popupState = false;
	}

}
