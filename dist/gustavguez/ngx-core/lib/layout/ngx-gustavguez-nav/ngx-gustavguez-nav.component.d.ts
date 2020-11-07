import { EventEmitter } from '@angular/core';
import { MainSidebarService } from '../ngx-gustavguez-main-sidebar/main-sidebar.service';
export declare class NgxGustavguezNavComponent {
    private mainSidebarService;
    brandTitle: string;
    userIsLogged: boolean;
    userMenuText: string;
    userMenuLogoutText: string;
    onLogout: EventEmitter<void>;
    onBrand: EventEmitter<void>;
    userMenuState: boolean;
    constructor(mainSidebarService: MainSidebarService);
    onToggleMenu(event: MouseEvent): void;
    onToggleUserMenu(event: MouseEvent): void;
    onLogoutClick(event: MouseEvent): void;
    onBrandLink(event: MouseEvent): void;
}
