import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// Pipes
import { PrettyDatePipe } from './pipes/pretty-date.pipe';
import { PrettyHourPipe } from './pipes/pretty-hour.pipe';
import { PrettyNumberPipe } from './pipes/pretty-number.pipe';

@NgModule({
	declarations: [
		PrettyDatePipe,
		PrettyHourPipe,
		PrettyNumberPipe,
	],
	imports: [
		CommonModule,
		RouterModule,
		ReactiveFormsModule
	],
	exports: [
		PrettyDatePipe,
		PrettyHourPipe,
		PrettyNumberPipe,
	]
})
export class NgxGustavguezCoreModule { }
