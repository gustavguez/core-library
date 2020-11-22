import { TableHeaderModel } from './table-header.model';
import { TableActionModel } from './table-action.model';
import { TableShowActionModel } from './actions/table-show-action.model';

export class TableOptionsModel {

	// Models
	public actions: TableActionModel[];

	// Contructor
	constructor(
		public headers: TableHeaderModel[],
		public fields: string[]
	) {
		// Default actions
		this.actions = [];
	}
}
