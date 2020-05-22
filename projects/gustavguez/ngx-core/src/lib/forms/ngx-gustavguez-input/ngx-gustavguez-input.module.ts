import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { NgxGustavguezInputHolderModule } from '../../forms/ngx-gustavguez-input-holder/ngx-gustavguez-input-holder.module';
import { NgxGustavguezInputComponent } from './ngx-gustavguez-input.component';

@NgModule({
	declarations: [NgxGustavguezInputComponent],
	imports: [
		CommonModule,
		ReactiveFormsModule,
		NgxGustavguezInputHolderModule
	],
	exports: [NgxGustavguezInputComponent]
})
export class NgxGustavguezInputModule { }
