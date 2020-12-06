import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { ArrayUtility } from '../../utilities/array.utility';
import { MainSidebarService } from './main-sidebar.service';
import { NavItemModel } from '../ngx-gustavguez-nav-item/nav-item.model';

@Component({
	selector: 'ngx-gustavguez-main-sidebar',
	templateUrl: './ngx-gustavguez-main-sidebar.component.html',
	styleUrls: ['./ngx-gustavguez-main-sidebar.component.scss']
})
export class NgxGustavguezMainSidebarComponent implements OnInit {
	// Inputs
	@Input() brandTitle: string;
	@Input() brandImg: string;
	@Input() userIsLogged: boolean;
	@Input() userAvatar: string;
	@Input() userName: string;
	@Input() secondaryText: string;
	@Input() menuItems: NavItemModel[];

	// Outputs
	@Output() onBrandLink: EventEmitter<void> = new EventEmitter();

	// Models
	menuItemsStates: any;

	// Inject services
	constructor(
		private mainSidebarService: MainSidebarService
	) { }

	// On component init
	ngOnInit(): void {
		// Init vars
		this.menuItemsStates = {};
	}

	// Custom events
	onMenuItemClick(menuItem: NavItemModel): void {
		// Check
		if (ArrayUtility.hasValue(menuItem.childs)) {
			// Toggle state
			this.menuItemsStates[menuItem.id] = menuItem.id in this.menuItemsStates ? !this.menuItemsStates[menuItem.id] : false;
		} else {
			// Close sidebar
			this.mainSidebarService.changeState(false);
		}
	}

	onBrandLinkClick(event: MouseEvent): void {
		event.preventDefault();

		// Close sidebar
		this.mainSidebarService.changeState(false);

		// Event emitter
		this.onBrandLink.emit();
	}

	onCloseSidebar(): void {
		this.mainSidebarService.changeState(false);
	}

}
