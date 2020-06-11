import { Component, OnInit } from '@angular/core';

import { 
	TableActionArgument, 
	StatusEnum, 
	TableShowActionModel, 
	TableHeaderModel, 
	TableOptionsModel 
} from 'projects/gustavguez/ngx-core/src/public-api';

@Component({
	selector: 'app-table',
	templateUrl: './table.component.html',
	styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
	// Models
	tableOptions: TableOptionsModel;
	tableOptions2: TableOptionsModel;
	users: any[];

	// On component init
	ngOnInit(): void {
		// Create options
		this.tableOptions = new TableOptionsModel(
			[
				new TableHeaderModel("ID"),
				new TableHeaderModel("Name"),
				new TableHeaderModel("Last name")
			],
			["id", "name", "lastName"]
		);
		// Create options 2
		this.tableOptions2 = new TableOptionsModel(
			[
				new TableHeaderModel("Name"),
				new TableHeaderModel("Last name")
			],
			["name", "lastName"]
		);

		// Create show action
		const showAction: TableShowActionModel = new TableShowActionModel((model: any): boolean => {
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
	onTableAction(args: TableActionArgument): void {
		console.log(args);
	}

}
