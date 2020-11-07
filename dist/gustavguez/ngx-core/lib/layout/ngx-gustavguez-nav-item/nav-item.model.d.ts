export declare class NavItemModel {
    display?: string;
    icon?: string;
    action?: string;
    childs?: NavItemModel[];
    id: string;
    isLink: boolean;
    constructor(display?: string, icon?: string, action?: string, childs?: NavItemModel[]);
}
