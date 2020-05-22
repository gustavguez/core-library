import { NgxGustavguezTableHeaderModel } from './ngx-gustavguez-table-header.model';
import { NgxGustavguezTableActionModel } from './ngx-gustavguez-table-action.model';
import { NgxGustavguezTableShowActionModel } from './actions/ngx-gustavguez-table-show-action.model';

export class NgxGustavguezTableOptionsModel {

	// Models
	public actions: NgxGustavguezTableActionModel[];

	// Contructor
	constructor(
		public headers: NgxGustavguezTableHeaderModel[],
		public fields: string[]
	) {
		// Default actions
		this.actions = [new NgxGustavguezTableShowActionModel()];
	}
}
