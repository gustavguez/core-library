import { NgxGustavguezTableActionModel } from '../ngx-gustavguez-table-action.model';

export class NgxGustavguezTableShowActionModel extends NgxGustavguezTableActionModel {

	constructor(mustDisplayCallback?: (model: any) => boolean) {
		// Call parent constructor
		super('fas fa-search', 'Show model', mustDisplayCallback);
	}
}
