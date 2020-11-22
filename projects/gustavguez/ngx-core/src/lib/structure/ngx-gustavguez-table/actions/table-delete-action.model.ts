import { StatusEnum, TableActionModel } from "@gustavguez/ngx-core";

export class TableDeleteActionModel extends TableActionModel {

	constructor(mustDisplayCallback?: (model: any) => boolean) {
		// Call parent constructor
		super('fas fa-trash', 'Eliminar', mustDisplayCallback);

		//By default danger status
		this.status = StatusEnum.DANGER;
	}
}