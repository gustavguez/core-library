import { StatusEnum } from '../../status.enum';
import { StringUtility } from '../../utilities/string.utility';

export class ToastModel {
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
