import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NgxGustavguezButtonComponent } from './forms/ngx-gustavguez-button/ngx-gustavguez-button.component';
import { NgxGustavguezInputComponent } from './forms/ngx-gustavguez-input/ngx-gustavguez-input.component';
import { NgxGustavguezInputHolderComponent } from './forms/ngx-gustavguez-input-holder/ngx-gustavguez-input-holder.component';
import { NgxGustavguezSelectComponent } from './forms/ngx-gustavguez-select/ngx-gustavguez-select.component';
import { NgxGustavguezSubmitComponent } from './forms/ngx-gustavguez-submit/ngx-gustavguez-submit.component';
import { NgxGustavguezTagsComponent } from './forms/ngx-gustavguez-tags/ngx-gustavguez-tags.component';
import { NgxGustavguezTextareaComponent } from './forms/ngx-gustavguez-textarea/ngx-gustavguez-textarea.component';
import { NgxGustavguezMainContainerDirective } from './layout/ngx-gustavguez-main-container/ngx-gustavguez-main-container.directive';
import { NgxGustavguezMainSidebarComponent } from './layout/ngx-gustavguez-main-sidebar/ngx-gustavguez-main-sidebar.component';
import { NgxGustavguezNavComponent } from './layout/ngx-gustavguez-nav/ngx-gustavguez-nav.component';
import { NgxGustavguezNavItemComponent } from './layout/ngx-gustavguez-nav-item/ngx-gustavguez-nav-item.component';
import { NgxGustavguezPrettyDatePipe } from './pipes/ngx-gustavguez-pretty-date/ngx-gustavguez-pretty-date.pipe';
import { NgxGustavguezPrettyHourPipe } from './pipes/ngx-gustavguez-pretty-hour/ngx-gustavguez-pretty-hour.pipe';
import { NgxGustavguezPrettyNumberPipe } from './pipes/ngx-gustavguez-pretty-number/ngx-gustavguez-pretty-number.pipe';
import { NgxGustavguezCardComponent } from './structure/ngx-gustavguez-card/ngx-gustavguez-card.component';
import { NgxGustavguezInfoBoxComponent } from './structure/ngx-gustavguez-info-box/ngx-gustavguez-info-box.component';
import { NgxGustavguezLoaderComponent } from './structure/ngx-gustavguez-loader/ngx-gustavguez-loader.component';
import { NgxGustavguezPageHeaderComponent } from './structure/ngx-gustavguez-page-header/ngx-gustavguez-page-header.component';
import { NgxGustavguezPopupComponent } from './structure/ngx-gustavguez-popup/ngx-gustavguez-popup.component';
import { NgxGustavguezTableComponent } from './structure/ngx-gustavguez-table/ngx-gustavguez-table.component';
import { NgxGustavguezToastsComponent } from './structure/ngx-gustavguez-toasts/ngx-gustavguez-toasts.component';


@NgModule({
	declarations: [
		NgxGustavguezButtonComponent,
		NgxGustavguezInputComponent,
		NgxGustavguezInputHolderComponent,
		NgxGustavguezSelectComponent,
		NgxGustavguezSubmitComponent,
		NgxGustavguezTagsComponent,
		NgxGustavguezTextareaComponent,

		NgxGustavguezMainContainerDirective,
		NgxGustavguezMainSidebarComponent,
		NgxGustavguezNavComponent,
		NgxGustavguezNavItemComponent,

		NgxGustavguezPrettyDatePipe,
		NgxGustavguezPrettyHourPipe,
		NgxGustavguezPrettyNumberPipe,

		NgxGustavguezCardComponent,
		NgxGustavguezInfoBoxComponent,
		NgxGustavguezLoaderComponent,
		NgxGustavguezPageHeaderComponent,
		NgxGustavguezPopupComponent,
		NgxGustavguezTableComponent,
		NgxGustavguezToastsComponent
	],
	imports: [
		CommonModule,
		RouterModule,
		ReactiveFormsModule
	],
	exports: [
		NgxGustavguezButtonComponent,
		NgxGustavguezInputComponent,
		NgxGustavguezInputHolderComponent,
		NgxGustavguezSelectComponent,
		NgxGustavguezSubmitComponent,
		NgxGustavguezTagsComponent,
		NgxGustavguezTextareaComponent,

		NgxGustavguezMainContainerDirective,
		NgxGustavguezMainSidebarComponent,
		NgxGustavguezNavComponent,
		NgxGustavguezNavItemComponent,

		NgxGustavguezPrettyDatePipe,
		NgxGustavguezPrettyHourPipe,
		NgxGustavguezPrettyNumberPipe,

		NgxGustavguezCardComponent,
		NgxGustavguezInfoBoxComponent,
		NgxGustavguezLoaderComponent,
		NgxGustavguezPageHeaderComponent,
		NgxGustavguezPopupComponent,
		NgxGustavguezTableComponent,
		NgxGustavguezToastsComponent
	]
})
export class NgxGustavguezCoreModule { }
