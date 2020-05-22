import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { NgxGustavguezInputHolderModule } from '../../forms/ngx-gustavguez-input-holder/ngx-gustavguez-input-holder.module';
import { NgxGustavguezTextareaComponent } from './ngx-gustavguez-textarea.component';

@NgModule({
	declarations: [NgxGustavguezTextareaComponent],
	imports: [
		CommonModule,
		ReactiveFormsModule,
		NgxGustavguezInputHolderModule
	],
	exports: [NgxGustavguezTextareaComponent]
})
export class NgxGustavguezTextareaModule { }
