export class NumberUtility {

	static format(val: number): string {
		const valStr: string = val.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
		return valStr.substring(0, valStr.length - 3);
	}

	static valid(val: number): boolean {
		return !isNaN(Number(val));
	}
}
