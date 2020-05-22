import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { NgxGustavguezNavItemModel } from 'projects/ngx-gustavguez-core/src/public-api';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {

	// Inject services
	constructor(
		private router: Router ) { }

	// Models
	menuItems: NgxGustavguezNavItemModel[] = [
		new NgxGustavguezNavItemModel("Api", "fas fa-hand-holding-usd", null, [
			new NgxGustavguezNavItemModel("Api service", "fas fa-home", "api/api-service")
		]),
		new NgxGustavguezNavItemModel("Structure", "fas fa-hand-holding-usd", null, [
			new NgxGustavguezNavItemModel("Loader", "fas fa-home", "structure/loader"),
			new NgxGustavguezNavItemModel("Card", "fas fa-home", "structure/card"),
			new NgxGustavguezNavItemModel("Info box", "fas fa-home", "structure/info-box"),
			new NgxGustavguezNavItemModel("Page header", "fas fa-home", "structure/page-header"),
			new NgxGustavguezNavItemModel("Popup", "fas fa-home", "structure/popup"),
			new NgxGustavguezNavItemModel("Toasts", "fas fa-home", "structure/toasts"),
			new NgxGustavguezNavItemModel("Table", "fas fa-home", "structure/table"),
		]),
		new NgxGustavguezNavItemModel("Forms", "fas fa-hand-holding-usd", null, [
			new NgxGustavguezNavItemModel("Button", "fas fa-home", "forms/button"),
			new NgxGustavguezNavItemModel("Input holder", "fas fa-home", "forms/input-holder"),
			new NgxGustavguezNavItemModel("Input", "fas fa-home", "forms/input"),
			new NgxGustavguezNavItemModel("Textarea", "fas fa-home", "forms/textarea"),
			new NgxGustavguezNavItemModel("Select", "fas fa-home", "forms/select"),
			new NgxGustavguezNavItemModel("Tags", "fas fa-home", "forms/tags")
		]),
	]

	// Custom events
	onLogout() {
		console.log("logout");
	}

	onBrandLink() {
		this.router.navigate(["/"]);
	}

}
