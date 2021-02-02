import { TableActionModel } from "../table-action.model";
import { StatusEnum } from "../../../status.enum";

export class TableDeleteActionModel extends TableActionModel {

	constructor(
		mustDisplayCallback?: (model: any) => boolean,
		mustDisableCallback?: (model: any) => boolean
	) {
		// Call parent constructor
		super('fas fa-trash', 'Eliminar', mustDisplayCallback, mustDisableCallback);

		//By default danger status
		this.status = StatusEnum.DANGER;
	}
}