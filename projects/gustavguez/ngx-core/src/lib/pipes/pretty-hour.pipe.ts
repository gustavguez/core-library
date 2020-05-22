import { Pipe, PipeTransform } from '@angular/core';
import { DateUtility } from '../utilities/date.utility';

@Pipe({
	name: 'prettyHour'
})
export class PrettyHourPipe implements PipeTransform {

	transform(value: any): any {
		return DateUtility.prettyHour(value);
	}

}
