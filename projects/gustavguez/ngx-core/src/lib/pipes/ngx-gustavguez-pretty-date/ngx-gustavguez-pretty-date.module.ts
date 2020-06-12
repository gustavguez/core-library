import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgxGustavguezPrettyDatePipe } from './ngx-gustavguez-pretty-date.pipe';

@NgModule({
	declarations: [NgxGustavguezPrettyDatePipe],
	imports: [CommonModule],
	exports: [NgxGustavguezPrettyDatePipe]
})
export class NgxGustavguezPrettyDateModule { }
