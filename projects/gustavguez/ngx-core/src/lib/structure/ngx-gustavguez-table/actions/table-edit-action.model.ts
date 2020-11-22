import { TableActionModel } from "@gustavguez/ngx-core";

export class TableEditActionModel extends TableActionModel {

	constructor(mustDisplayCallback?: (model: any) => boolean) {
		// Call parent constructor
		super('fas fa-pencil-alt', 'Editar', mustDisplayCallback);
	}
}