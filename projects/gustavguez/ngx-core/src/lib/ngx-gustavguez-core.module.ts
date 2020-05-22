import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// Pipes
import { PrettyDatePipe } from './pipes/pretty-date.pipe';
import { PrettyHourPipe } from './pipes/pretty-hour.pipe';
import { PrettyNumberPipe } from './pipes/pretty-number.pipe';

// Directives
import { NgxGustavguezMainContainerDirective } from './layout/ngx-gustavguez-main-container/ngx-gustavguez-main-container.directive';

// Components
import { NgxGustavguezPopupComponent } from './structure/ngx-gustavguez-popup/ngx-gustavguez-popup.component';
import { NgxGustavguezNavComponent } from './layout/ngx-gustavguez-nav/ngx-gustavguez-nav.component';
import { NgxGustavguezMainSidebarComponent } from './layout/ngx-gustavguez-main-sidebar/ngx-gustavguez-main-sidebar.component';
import { NgxGustavguezPageHeaderComponent } from './structure/ngx-gustavguez-page-header/ngx-gustavguez-page-header.component';
import { NgxGustavguezInfoBoxComponent } from './structure/ngx-gustavguez-info-box/ngx-gustavguez-info-box.component';
import { NgxGustavguezCardComponent } from './structure/ngx-gustavguez-card/ngx-gustavguez-card.component';
import { NgxGustavguezToastsComponent } from './structure/ngx-gustavguez-toasts/ngx-gustavguez-toasts.component';
import { NgxGustavguezNavItemComponent } from './layout/ngx-gustavguez-nav-item/ngx-gustavguez-nav-item.component';
import { NgxGustavguezTableComponent } from './structure/ngx-gustavguez-table/ngx-gustavguez-table.component';

@NgModule({
	declarations: [
		PrettyDatePipe,
		PrettyHourPipe,
		PrettyNumberPipe,
		NgxGustavguezPopupComponent,
		NgxGustavguezNavComponent,
		NgxGustavguezMainSidebarComponent,
		NgxGustavguezMainContainerDirective,
		NgxGustavguezPageHeaderComponent,
		NgxGustavguezInfoBoxComponent,
		NgxGustavguezCardComponent,
		NgxGustavguezToastsComponent,
		NgxGustavguezNavItemComponent,
		NgxGustavguezTableComponent,
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
		NgxGustavguezPopupComponent,
		NgxGustavguezNavComponent,
		NgxGustavguezMainSidebarComponent,
		NgxGustavguezMainContainerDirective,
		NgxGustavguezPageHeaderComponent,
		NgxGustavguezInfoBoxComponent,
		NgxGustavguezCardComponent,
		NgxGustavguezToastsComponent,
		NgxGustavguezNavItemComponent,
		NgxGustavguezTableComponent,
	]
})
export class NgxGustavguezCoreModule { }
