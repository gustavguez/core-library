import { Component, Input, Output, EventEmitter, TemplateRef } from '@angular/core';

import { TableOptionsModel } from './table-options.model';
import { TableActionArgument } from './table-action.argument';
import { TableActionModel } from './table-action.model';

@Component({
	selector: 'ngx-gustavguez-table',
	templateUrl: './ngx-gustavguez-table.component.html',
	styleUrls: ['./ngx-gustavguez-table.component.scss']
})
export class NgxGustavguezTableComponent {
	// Inputs
	@Input() options: TableOptionsModel;
	@Input() items: any[];
	@Input() customTdTpl: TemplateRef<any>;

	// Output
	@Output() onAction: EventEmitter<TableActionArgument> = new EventEmitter();

	// Custom events
	onActionClick(action: TableActionModel, model: any): void {
		this.onAction.emit(
			new TableActionArgument(action, model)
		);
	}
}
