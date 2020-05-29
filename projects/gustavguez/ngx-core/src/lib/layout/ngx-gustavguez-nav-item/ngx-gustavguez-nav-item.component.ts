import { Component, Input, Output, EventEmitter } from '@angular/core';

import { NavItemModel } from './nav-item.model';

@Component({
	selector: '[ngxGustavguezNavItem]',
	templateUrl: './ngx-gustavguez-nav-item.component.html',
	styleUrls: ['./ngx-gustavguez-nav-item.component.scss']
})
export class NgxGustavguezNavItemComponent {
	// Inputs
	@Input() navItem: NavItemModel;
	@Input() isParent: boolean;
	@Input() state: boolean;

	@Output() onNavItem: EventEmitter<NavItemModel> = new EventEmitter();

	// Custome events
	onNavItemClick(event: MouseEvent): void {
		event.preventDefault();
		this.onNavItem.emit(this.navItem);
	}

	onNavItemChild(child: NavItemModel): void {
		this.onNavItem.emit(child);
	}
}
