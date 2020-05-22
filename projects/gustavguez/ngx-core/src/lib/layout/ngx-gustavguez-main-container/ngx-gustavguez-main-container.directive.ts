import { Directive, HostBinding, OnInit } from '@angular/core';

import { NgxGustavguezMainSidebarService } from '../ngx-gustavguez-main-sidebar/ngx-gustavguez-main-sidebar.service';

@Directive({
	selector: '[ngxGustavguezMainContainer]'
})
export class NgxGustavguezMainContainerDirective implements OnInit {
	// Host binding
	@HostBinding('class') hostClasses: string;

	// Modes
	classes: string[] = [
		'sidebar-mini',
		'layout-fixed',
		'layout-navbar-fixed'
	];
	state: boolean;

	// Inject services
	constructor(
		private ngxGustavguezMainSidebarService: NgxGustavguezMainSidebarService) { }

	// On component init
	ngOnInit(): void {
		// Set base classes to host classes
		this.loadHostClasses(false);

		// Watch sidebarState change
		this.ngxGustavguezMainSidebarService.onChangeState.subscribe((state: boolean) => {
			this.loadHostClasses(state);
		});
		this.ngxGustavguezMainSidebarService.onToggleState.subscribe(() => {
			this.loadHostClasses(!this.state);
		});
	}

	// Private helper methods
	private loadHostClasses(state: boolean): void {
		// Control index just for control
		const indexClassCollapse: number = this.classes.indexOf('sidebar-collapse');
		const indexClassOpen: number = this.classes.indexOf('sidebar-open');

		// Load state
		this.state = state;

		// Check state
		if (state) {
			this.classes.push('sidebar-open');
			this.classes.push('sidebar-collapse');
		} else {
			if (indexClassCollapse > -1) {
				this.classes.splice(indexClassCollapse, 1);
			}
			if (indexClassOpen > -1) {
				this.classes.splice(indexClassOpen, 1);
			}
		}

		// Load classes
		this.hostClasses = this.classes.join(' ');
	}

}
