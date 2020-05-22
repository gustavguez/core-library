import { Component, OnInit } from '@angular/core';

import { NgxGustavguezTableOptionsModel, NgxGustavguezTableHeaderModel, NgxGustavguezTableShowActionModel, StatusEnum } from 'projects/gustavguez/ngx-core/src/public-api';
import { NgxGustavguezTableActionArgument } from 'projects/gustavguez/ngx-core/src/lib/structure/ngx-gustavguez-table/ngx-gustavguez-table-action.argument';

@Component({
	selector: 'app-table',
	templateUrl: './table.component.html',
	styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
	// Models
	tableOptions: NgxGustavguezTableOptionsModel;
	tableOptions2: NgxGustavguezTableOptionsModel;
	users: any[];

	// On component init
	ngOnInit(): void {
		// Create options
		this.tableOptions = new NgxGustavguezTableOptionsModel(
			[
				new NgxGustavguezTableHeaderModel("ID"),
				new NgxGustavguezTableHeaderModel("Name"),
				new NgxGustavguezTableHeaderModel("Last name")
			],
			["id", "name", "lastName"]
		);
		// Create options 2
		this.tableOptions2 = new NgxGustavguezTableOptionsModel(
			[
				new NgxGustavguezTableHeaderModel("Name"),
				new NgxGustavguezTableHeaderModel("Last name")
			],
			["name", "lastName"]
		);

		// Create show action
		const showAction: NgxGustavguezTableShowActionModel = new NgxGustavguezTableShowActionModel((model: any): boolean => {
			if (model.id === 1000) return false;
			return true;
		});
		showAction.status = StatusEnum.DARK;

		// Overrides actions
		this.tableOptions2.actions = [showAction];

		// Items
		this.users = [
			{ id: 1000, name: "Gustavo", lastName: "Rodríguez", age: 29 },
			{ id: 1002, name: "Daiana", lastName: "Bais", age: 31 }
		];
	}

	// Custome events
	onTableAction(args: NgxGustavguezTableActionArgument): void {
		console.log(args);
	}

}
