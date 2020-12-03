import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { NgxGustavguezCoreModule } from 'projects/gustavguez/ngx-core/src/public-api';

import { AppComponent } from './app.component';
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
import { BreadcrumbComponent } from './structure/breadcrumb/breadcrumb.component';

@NgModule({
	declarations: [
		AppComponent,
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
		TagsComponent,
		BreadcrumbComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		AppRoutingModule,
		RouterModule,
		ReactiveFormsModule,
		NgxGustavguezCoreModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
