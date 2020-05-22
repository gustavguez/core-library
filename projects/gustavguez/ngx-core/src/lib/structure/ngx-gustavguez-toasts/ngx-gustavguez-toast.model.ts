import { StatusEnum } from '../../status.enum';
import { StringUtility } from '../../utilities/string.utility';

export class NgxGustavguezToastModel {
	public id: string;
	public timerInstance: any;

	constructor(
		public message: string,
		public status: StatusEnum
	) {
		// Generate random id
		this.id = StringUtility.randomString();
	}
}
