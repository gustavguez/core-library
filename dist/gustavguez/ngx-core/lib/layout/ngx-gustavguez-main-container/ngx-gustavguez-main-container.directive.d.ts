import { OnInit } from '@angular/core';
import { MainSidebarService } from '../ngx-gustavguez-main-sidebar/main-sidebar.service';
export declare class NgxGustavguezMainContainerDirective implements OnInit {
    private mainSidebarService;
    hostClasses: string;
    classes: string[];
    state: boolean;
    constructor(mainSidebarService: MainSidebarService);
    ngOnInit(): void;
    private loadHostClasses;
}
