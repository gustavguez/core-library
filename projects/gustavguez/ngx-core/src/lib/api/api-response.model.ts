import { ArrayUtility } from '../utilities/array.utility';

export class ApiResponseModel {

	constructor(
		public data?: any) { }

	public hasSingreResult(): boolean {
		return this.data && this.data.id;
	}

	public hasCollectionResult(): boolean {
		return ArrayUtility.hasValue(this.data);
	}
}
