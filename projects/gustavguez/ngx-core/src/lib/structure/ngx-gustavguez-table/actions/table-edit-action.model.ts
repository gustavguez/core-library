import { TableActionModel } from "../table-action.model";

export class TableEditActionModel extends TableActionModel {

	constructor(
		mustDisplayCallback?: (model: any) => boolean,
		mustDisableCallback?: (model: any) => boolean
	) {
		// Call parent constructor
		super('fas fa-pencil-alt', 'Editar', mustDisplayCallback, mustDisableCallback);
	}
}