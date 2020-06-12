import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgxGustavguezPrettyNumberPipe } from './ngx-gustavguez-pretty-number.pipe';

@NgModule({
	declarations: [NgxGustavguezPrettyNumberPipe],
	imports: [CommonModule],
	exports: [NgxGustavguezPrettyNumberPipe]
})
export class NgxGustavguezPrettyNumberModule { }
