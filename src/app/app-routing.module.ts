import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

// Components
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

// Routes
const appRoutes: Routes = [
	{
		path: "",
		component: DashboardComponent
	},
	// STRUCTURE
	{
		path: "structure/loader",
		component: LoaderComponent
	},
	{
		path: "structure/card",
		component: CardComponent
	},
	{
		path: "structure/info-box",
		component: InfoBoxComponent
	},
	{
		path: "structure/page-header",
		component: PageHeaderComponent
	},
	{
		path: "structure/popup",
		component: PopupComponent
	},
	{
		path: "structure/toasts",
		component: ToastsComponent
	},
	{
		path: "structure/table",
		component: TableComponent
	},
	// FORMS
	{
		path: "forms/button",
		component: ButtonComponent
	},
	{
		path: "forms/input-holder",
		component: InputHolderComponent
	},
	{
		path: "forms/input",
		component: InputComponent
	},
	{
		path: "forms/textarea",
		component: TextareaComponent
	},
	{
		path: "forms/select",
		component: SelectComponent
	},
	{
		path: "forms/tags",
		component: TagsComponent
	}
];

@NgModule({
	declarations: [

	],
	imports: [
		RouterModule.forRoot(appRoutes)
	],
	providers: []
})
export class AppRoutingModule { }