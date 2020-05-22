import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgxGustavguezLoaderModule } from '../../structure/ngx-gustavguez-loader/ngx-gustavguez-loader.module';
import { NgxGustavguezSubmitComponent } from './ngx-gustavguez-submit.component';

@NgModule({
	declarations: [NgxGustavguezSubmitComponent],
	imports: [
		CommonModule,
		NgxGustavguezLoaderModule
	],
	exports: [NgxGustavguezSubmitComponent]
})
export class NgxGustavguezSubmitModule { }
