import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { 
	NgxGustavguezCoreModule, 
	NgxGustavguezButtonModule, 
	NgxGustavguezLoaderModule,
	NgxGustavguezSubmitModule,
	NgxGustavguezInputModule,
	NgxGustavguezSelectModule,
	NgxGustavguezTagsModule,
	NgxGustavguezTextareaModule,
	NgxGustavguezInputHolderModule,
	NgxGustavguezMainContainerModule,
	NgxGustavguezMainSiderbarModule,
	NgxGustavguezNavModule,
	NgxGustavguezNavItemModule,
	NgxGustavguezPopupModule,
	NgxGustavguezCardModule,
	NgxGustavguezToastsModule,
	NgxGustavguezInfoBoxModule,
	NgxGustavguezTableModule,
	NgxGustavguezPageHeaderModule
} from 'projects/gustavguez/ngx-core/src/public-api';

import { AppComponent } from './app.component';
import { ApiServiceComponent } from './api/api-service/api-service.component';
import { AppRoutingModule } from './app-routing.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { LoaderComponent } from './structure/loader/loader.component';
import { CardComponent } from './structure/card/card.component';
import { InfoBoxComponent } from './structure/info-box/info-box.component';
import { PageHeaderComponent } from './structure/page-header/page-header.component';
import { PopupComponent } from './structure/popup/popup.component';
import { ToastsComponent } from './structure/toasts/toasts.component';
import { ButtonComponent } from './forms/button/button.component';
import { InputHolderComponent } from './forms/input-holder/input-holder.component';
import { TableComponent } from './structure/table/table.component';
import { InputComponent } from './forms/input/input.component';
import { TextareaComponent } from './forms/textarea/textarea.component';
import { SelectComponent } from './forms/select/select.component';
import { TagsComponent } from './forms/tags/tags.component';

@NgModule({
	declarations: [
		AppComponent,
		ApiServiceComponent,
		DashboardComponent,
		LoaderComponent,
		CardComponent,
		InfoBoxComponent,
		PageHeaderComponent,
		PopupComponent,
		ToastsComponent,
		ButtonComponent,
		InputHolderComponent,
		TableComponent,
		InputComponent,
		TextareaComponent,
		SelectComponent,
		TagsComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		AppRoutingModule,
		RouterModule,
		ReactiveFormsModule,
		NgxGustavguezCoreModule,
		NgxGustavguezButtonModule,
		NgxGustavguezSubmitModule,
		NgxGustavguezInputModule,
		NgxGustavguezSelectModule,
		NgxGustavguezTagsModule,
		NgxGustavguezTextareaModule,
		NgxGustavguezInputHolderModule,
		NgxGustavguezMainContainerModule,
		NgxGustavguezMainSiderbarModule,
		NgxGustavguezNavModule,
		NgxGustavguezNavItemModule,
		NgxGustavguezPopupModule,
		NgxGustavguezLoaderModule,
		NgxGustavguezPopupModule,
		NgxGustavguezCardModule,
		NgxGustavguezToastsModule,
		NgxGustavguezTableModule,
		NgxGustavguezInfoBoxModule,
		NgxGustavguezPageHeaderModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
