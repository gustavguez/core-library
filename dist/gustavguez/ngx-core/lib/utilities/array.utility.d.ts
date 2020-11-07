export declare class ArrayUtility {
    static find(items: any[], id: any, callback: (item: any, index?: any) => void, compareKey?: string): void;
    static each(items: any, callback: (item: any, index?: any) => void): void;
    static every(items: any[], callback: (item: any, index?: any) => boolean): void;
    static getDisplayKeys(items: any[], idKey?: string, displayKey?: string): any;
    static getSelectedKeys(items: []): any[];
    static filter(items: any[], callback: (item: any, index?: any) => any): any[];
    static map(items: any[], callback: (item: any, index?: any) => any): any[];
    static sort(items: any[], compareKey: string): any[];
    static hasValue(items: any[]): boolean;
}
