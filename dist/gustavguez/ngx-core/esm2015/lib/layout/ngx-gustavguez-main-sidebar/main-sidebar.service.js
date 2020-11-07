import { Injectable, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export class MainSidebarService {
    constructor() {
        // Properties
        this.onChangeState = new EventEmitter();
        this.onToggleState = new EventEmitter();
    }
    // Public methods
    changeState(state) {
        this.onChangeState.emit(state);
    }
    toggleState() {
        this.onToggleState.emit();
    }
}
MainSidebarService.ɵprov = i0.ɵɵdefineInjectable({ factory: function MainSidebarService_Factory() { return new MainSidebarService(); }, token: MainSidebarService, providedIn: "root" });
MainSidebarService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1zaWRlYmFyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9ndXN0YXZndWV6L25neC1jb3JlL3NyYy9saWIvbGF5b3V0L25neC1ndXN0YXZndWV6LW1haW4tc2lkZWJhci9tYWluLXNpZGViYXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFLekQsTUFBTSxPQUFPLGtCQUFrQjtJQUgvQjtRQUtDLGFBQWE7UUFDTixrQkFBYSxHQUEwQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzFELGtCQUFhLEdBQXVCLElBQUksWUFBWSxFQUFFLENBQUM7S0FXOUQ7SUFUQSxpQkFBaUI7SUFDVixXQUFXLENBQUMsS0FBYztRQUNoQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRU0sV0FBVztRQUNqQixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzNCLENBQUM7Ozs7WUFoQkQsVUFBVSxTQUFDO2dCQUNYLFVBQVUsRUFBRSxNQUFNO2FBQ2xCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcblx0cHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE1haW5TaWRlYmFyU2VydmljZSB7XG5cblx0Ly8gUHJvcGVydGllc1xuXHRwdWJsaWMgb25DaGFuZ2VTdGF0ZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXHRwdWJsaWMgb25Ub2dnbGVTdGF0ZTogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdC8vIFB1YmxpYyBtZXRob2RzXG5cdHB1YmxpYyBjaGFuZ2VTdGF0ZShzdGF0ZTogYm9vbGVhbik6IHZvaWQge1xuXHRcdHRoaXMub25DaGFuZ2VTdGF0ZS5lbWl0KHN0YXRlKTtcblx0fVxuXG5cdHB1YmxpYyB0b2dnbGVTdGF0ZSgpOiB2b2lkIHtcblx0XHR0aGlzLm9uVG9nZ2xlU3RhdGUuZW1pdCgpO1xuXHR9XG5cbn1cbiJdfQ==