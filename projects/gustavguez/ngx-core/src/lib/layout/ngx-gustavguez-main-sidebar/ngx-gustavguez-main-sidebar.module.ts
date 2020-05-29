import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgxGustavguezMainSidebarComponent } from './ngx-gustavguez-main-sidebar.component';
import { NgxGustavguezNavItemModule } from '../ngx-gustavguez-nav-item/ngx-gustavguez-nav-item.module';

@NgModule({
	declarations: [NgxGustavguezMainSidebarComponent],
	imports: [
		CommonModule,
		NgxGustavguezNavItemModule
	],
	exports: [NgxGustavguezMainSidebarComponent]
})
export class NgxGustavguezMainSiderbarModule { }
