import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NgxGustavguezNavItemComponent } from './ngx-gustavguez-nav-item.component';

@NgModule({
	declarations: [NgxGustavguezNavItemComponent],
	imports: [
		CommonModule,
		RouterModule
	],
	exports: [NgxGustavguezNavItemComponent]
})
export class NgxGustavguezNavItemModule { }
