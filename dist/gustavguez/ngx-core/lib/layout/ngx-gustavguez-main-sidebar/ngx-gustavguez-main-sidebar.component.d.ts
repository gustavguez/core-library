import { OnInit, EventEmitter } from '@angular/core';
import { MainSidebarService } from './main-sidebar.service';
import { NavItemModel } from '../ngx-gustavguez-nav-item/nav-item.model';
export declare class NgxGustavguezMainSidebarComponent implements OnInit {
    private mainSidebarService;
    brandTitle: string;
    brandImg: string;
    userIsLogged: boolean;
    userAvatar: string;
    userName: string;
    menuItems: NavItemModel[];
    onBrandLink: EventEmitter<void>;
    menuItemsStates: any;
    constructor(mainSidebarService: MainSidebarService);
    ngOnInit(): void;
    onMenuItemClick(menuItem: NavItemModel): void;
    onBrandLinkClick(event: MouseEvent): void;
    onCloseSidebar(): void;
}
