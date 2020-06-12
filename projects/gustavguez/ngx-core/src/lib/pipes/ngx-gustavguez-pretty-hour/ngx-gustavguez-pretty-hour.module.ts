import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgxGustavguezPrettyHourPipe } from './ngx-gustavguez-pretty-hour.pipe';

@NgModule({
	declarations: [NgxGustavguezPrettyHourPipe],
	imports: [CommonModule],
	exports: [NgxGustavguezPrettyHourPipe]
})
export class NgxGustavguezPrettyHourModule { }
