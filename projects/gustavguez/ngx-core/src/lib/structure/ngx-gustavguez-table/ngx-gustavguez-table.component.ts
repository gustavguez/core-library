import { Component, Input, Output, EventEmitter, TemplateRef } from '@angular/core';

import { NgxGustavguezTableOptionsModel } from './ngx-gustavguez-table-options.model';
import { NgxGustavguezTableActionArgument } from './ngx-gustavguez-table-action.argument';
import { NgxGustavguezTableActionModel } from './ngx-gustavguez-table-action.model';

@Component({
	selector: 'ngx-gustavguez-table',
	templateUrl: './ngx-gustavguez-table.component.html',
	styleUrls: ['./ngx-gustavguez-table.component.scss']
})
export class NgxGustavguezTableComponent {
	// Inputs
	@Input() options: NgxGustavguezTableOptionsModel;
	@Input() items: any[];
	@Input() customTdTpl: TemplateRef<any>;

	// Output
	@Output() onAction: EventEmitter<NgxGustavguezTableActionArgument> = new EventEmitter();

	// Custom events
	onActionClick(action: NgxGustavguezTableActionModel, model: any): void {
		this.onAction.emit(
			new NgxGustavguezTableActionArgument(action, model)
		);
	}
}
