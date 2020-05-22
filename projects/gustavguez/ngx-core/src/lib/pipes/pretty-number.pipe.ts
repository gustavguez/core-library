import { Pipe, PipeTransform } from '@angular/core';
import { NumberUtility } from '../utilities/number.utility';

@Pipe({
	name: 'prettyNumber'
})
export class PrettyNumberPipe implements PipeTransform {

	transform(value: any): any {
		return NumberUtility.valid(value) ? NumberUtility.format(value) : '0';
	}

}
