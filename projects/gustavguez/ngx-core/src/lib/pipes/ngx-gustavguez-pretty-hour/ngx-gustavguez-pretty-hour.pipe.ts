import { Pipe, PipeTransform } from '@angular/core';

import { DateUtility } from '../../utilities/date.utility';

@Pipe({
	name: 'ngxGustavguezPrettyHour'
})
export class NgxGustavguezPrettyHourPipe implements PipeTransform {

	transform(value: any): any {
		return DateUtility.prettyHour(value);
	}

}
