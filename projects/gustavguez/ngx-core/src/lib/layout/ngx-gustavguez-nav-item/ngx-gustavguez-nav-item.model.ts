import { StringUtility } from '../../utilities/string.utility';
import { ArrayUtility } from '../../utilities/array.utility';

export class NgxGustavguezNavItemModel {

	public id: string;
	public isLink: boolean;

	constructor(
		public display?: string,
		public icon?: string,
		public action?: string,
		public childs?: NgxGustavguezNavItemModel[]
	) {
		this.id = StringUtility.randomString();
		this.isLink = !ArrayUtility.hasValue(childs);
	}
}
