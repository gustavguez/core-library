import { Pipe, PipeTransform } from '@angular/core';
import { DateUtility } from '../utilities/date.utility';

@Pipe({
	name: 'prettyDate'
})
export class PrettyDatePipe implements PipeTransform {

	transform(value: any, ...args: any[]): any {
		return DateUtility.prettyDate(value, args.length ? args[0] : true);
	}

}
