import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { 
	NgxGustavguezButtonComponent, 
	NgxGustavguezInputComponent, 
	NgxGustavguezInputHolderComponent,
	NgxGustavguezSelectComponent,
	NgxGustavguezSubmitComponent,
	NgxGustavguezTagsComponent,
	NgxGustavguezTextareaComponent
} from './forms';

import { 
	NgxGustavguezMainContainerDirective, 
	NgxGustavguezMainSidebarComponent, 
	NgxGustavguezNavComponent,
	NgxGustavguezNavItemComponent
} from './layout';

import { 
	NgxGustavguezPrettyDatePipe, 
	NgxGustavguezPrettyHourPipe, 
	NgxGustavguezPrettyNumberPipe 
} from './pipes';

import { 
	NgxGustavguezCardComponent, 
	NgxGustavguezInfoBoxComponent, 
	NgxGustavguezLoaderComponent, 
	NgxGustavguezPageHeaderComponent, 
	NgxGustavguezPopupComponent,
	NgxGustavguezTableComponent,
	NgxGustavguezToastsComponent
} from './structure';

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
