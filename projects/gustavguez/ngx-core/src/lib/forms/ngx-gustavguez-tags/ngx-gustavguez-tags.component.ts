import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'ngx-gustavguez-tags',
	templateUrl: './ngx-gustavguez-tags.component.html',
	styleUrls: ['./ngx-gustavguez-tags.component.scss']
})
export class NgxGustavguezTagsComponent {
	// Inputs
	@Input() options: string;
	@Input() optionLabel: string;

	// Outputs
	@Output() onSelect: EventEmitter<any> = new EventEmitter();

	// Custom events
	onEmitSelect(option: any): void {
		this.onSelect.emit(option);
	}
}
