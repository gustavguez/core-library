import { StatusEnum } from '../../status.enum';

export class NgxGustavguezTableActionModel {

	// Models
	public btnClasses: string;
	public status: StatusEnum;

	// Constructor
	constructor(
		public icon?: string,
		public text?: string,
		public mustDisplayCallback?: (model: any) => boolean) {
		// By default is primary
		this.status = StatusEnum.PRIMARY;
	}

	// Abstract methods
	public mustDisplay(model: any): boolean {
		return this.mustDisplayCallback instanceof Function ? this.mustDisplayCallback(model) : true;
	}
}
