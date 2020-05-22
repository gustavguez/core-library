import { Component, Input, Output, EventEmitter } from '@angular/core';

import { NgxGustavguezMainSidebarService } from '../ngx-gustavguez-main-sidebar/ngx-gustavguez-main-sidebar.service';

@Component({
	selector: 'ngx-gustavguez-nav',
	templateUrl: './ngx-gustavguez-nav.component.html',
	styleUrls: ['./ngx-gustavguez-nav.component.scss']
})
export class NgxGustavguezNavComponent {
	// Inputs
	@Input() brandTitle: string;
	@Input() userIsLogged: boolean;
	@Input() userMenuText: string;
	@Input() userMenuLogoutText: string;

	// Outputs
	@Output() onLogout: EventEmitter<void> = new EventEmitter();
	@Output() onBrand: EventEmitter<void> = new EventEmitter();

	// Models
	userMenuState: boolean;

	// Inject services
	constructor(
		private ngxGustavguezMainSidebarService: NgxGustavguezMainSidebarService) { }

	// Custom events
	onToggleMenu(event: MouseEvent): void {
		event.preventDefault();
		this.ngxGustavguezMainSidebarService.toggleState();
	}

	onToggleUserMenu(event: MouseEvent): void {
		event.preventDefault();
		this.userMenuState = !this.userMenuState;
	}

	onLogoutClick(event: MouseEvent): void {
		event.preventDefault();
		// Emit logout
		this.onLogout.emit();

		// Close user menu
		this.userMenuState = false;
	}

	onBrandLink(event: MouseEvent): void {
		event.preventDefault();
		this.onBrand.emit();
	}
}
