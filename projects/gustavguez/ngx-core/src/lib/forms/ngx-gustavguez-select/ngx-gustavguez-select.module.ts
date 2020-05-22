import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { NgxGustavguezInputHolderModule } from '../../forms/ngx-gustavguez-input-holder/ngx-gustavguez-input-holder.module';
import { NgxGustavguezSelectComponent } from './ngx-gustavguez-select.component';

@NgModule({
	declarations: [NgxGustavguezSelectComponent],
	imports: [
		CommonModule,
		ReactiveFormsModule,
		NgxGustavguezInputHolderModule
	],
	exports: [NgxGustavguezSelectComponent]
})
export class NgxGustavguezSelectModule { }
