import { EventEmitter } from '@angular/core';
import { NavItemModel } from './nav-item.model';
export declare class NgxGustavguezNavItemComponent {
    navItem: NavItemModel;
    isParent: boolean;
    state: boolean;
    onNavItem: EventEmitter<NavItemModel>;
    onNavItemClick(event: MouseEvent): void;
    onNavItemChild(child: NavItemModel): void;
}
