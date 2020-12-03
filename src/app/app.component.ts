import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { NavItemModel } from 'projects/gustavguez/ngx-core/src/public-api';

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
	menuItems: NavItemModel[] = [
		new NavItemModel("Structure", "fas fa-hand-holding-usd", null, [
			new NavItemModel("Loader", "fas fa-home", "structure/loader"),
			new NavItemModel("Card", "fas fa-home", "structure/card"),
			new NavItemModel("Info box", "fas fa-home", "structure/info-box"),
			new NavItemModel("Page header", "fas fa-home", "structure/page-header"),
			new NavItemModel("Popup", "fas fa-home", "structure/popup"),
			new NavItemModel("Toasts", "fas fa-home", "structure/toasts"),
			new NavItemModel("Table", "fas fa-home", "structure/table"),
			new NavItemModel("Breadcrumbs", "fas fa-home", "structure/breadcrumbs"),
		]),
		new NavItemModel("Forms", "fas fa-hand-holding-usd", null, [
			new NavItemModel("Button", "fas fa-home", "forms/button"),
			new NavItemModel("Input holder", "fas fa-home", "forms/input-holder"),
			new NavItemModel("Input", "fas fa-home", "forms/input"),
			new NavItemModel("Textarea", "fas fa-home", "forms/textarea"),
			new NavItemModel("Select", "fas fa-home", "forms/select"),
			new NavItemModel("Tags", "fas fa-home", "forms/tags")
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
