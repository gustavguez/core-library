import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgxGustavguezLoaderModule } from '../../structure/ngx-gustavguez-loader/ngx-gustavguez-loader.module';
import { NgxGustavguezButtonComponent } from './ngx-gustavguez-button.component';

@NgModule({
	declarations: [NgxGustavguezButtonComponent],
	imports: [
		CommonModule,
		NgxGustavguezLoaderModule
	],
	exports: [NgxGustavguezButtonComponent]
})
export class NgxGustavguezButtonModule { }
