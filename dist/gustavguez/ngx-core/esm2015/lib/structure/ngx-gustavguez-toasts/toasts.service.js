import { Injectable, EventEmitter } from '@angular/core';
import { ToastModel } from './toast.model';
import { StatusEnum } from '../../status.enum';
import * as i0 from "@angular/core";
export class ToastsService {
    constructor() {
        // Event emmiters
        this.onToastAdded = new EventEmitter();
    }
    // Methods
    addError(message) {
        // Open toast
        this.onToastAdded.emit(new ToastModel(message, StatusEnum.DANGER));
    }
    addSuccess(message) {
        // Open toast
        this.onToastAdded.emit(new ToastModel(message, StatusEnum.SUCCESS));
    }
}
ToastsService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ToastsService_Factory() { return new ToastsService(); }, token: ToastsService, providedIn: "root" });
ToastsService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3RzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9ndXN0YXZndWV6L25neC1jb3JlL3NyYy9saWIvc3RydWN0dXJlL25neC1ndXN0YXZndWV6LXRvYXN0cy90b2FzdHMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7QUFLL0MsTUFBTSxPQUFPLGFBQWE7SUFIMUI7UUFLQyxpQkFBaUI7UUFDVixpQkFBWSxHQUE2QixJQUFJLFlBQVksRUFBRSxDQUFDO0tBaUJuRTtJQWZBLFVBQVU7SUFDSCxRQUFRLENBQUMsT0FBZTtRQUM5QixhQUFhO1FBQ2IsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQ3JCLElBQUksVUFBVSxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsTUFBTSxDQUFDLENBQzFDLENBQUM7SUFDSCxDQUFDO0lBRU0sVUFBVSxDQUFDLE9BQWU7UUFDaEMsYUFBYTtRQUNiLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUNyQixJQUFJLFVBQVUsQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUMzQyxDQUFDO0lBQ0gsQ0FBQzs7OztZQXJCRCxVQUFVLFNBQUM7Z0JBQ1gsVUFBVSxFQUFFLE1BQU07YUFDbEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgVG9hc3RNb2RlbCB9IGZyb20gJy4vdG9hc3QubW9kZWwnO1xuaW1wb3J0IHsgU3RhdHVzRW51bSB9IGZyb20gJy4uLy4uL3N0YXR1cy5lbnVtJztcblxuQEluamVjdGFibGUoe1xuXHRwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFRvYXN0c1NlcnZpY2Uge1xuXG5cdC8vIEV2ZW50IGVtbWl0ZXJzXG5cdHB1YmxpYyBvblRvYXN0QWRkZWQ6IEV2ZW50RW1pdHRlcjxUb2FzdE1vZGVsPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHQvLyBNZXRob2RzXG5cdHB1YmxpYyBhZGRFcnJvcihtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcblx0XHQvLyBPcGVuIHRvYXN0XG5cdFx0dGhpcy5vblRvYXN0QWRkZWQuZW1pdChcblx0XHRcdG5ldyBUb2FzdE1vZGVsKG1lc3NhZ2UsIFN0YXR1c0VudW0uREFOR0VSKVxuXHRcdCk7XG5cdH1cblxuXHRwdWJsaWMgYWRkU3VjY2VzcyhtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcblx0XHQvLyBPcGVuIHRvYXN0XG5cdFx0dGhpcy5vblRvYXN0QWRkZWQuZW1pdChcblx0XHRcdG5ldyBUb2FzdE1vZGVsKG1lc3NhZ2UsIFN0YXR1c0VudW0uU1VDQ0VTUylcblx0XHQpO1xuXHR9XG5cbn1cbiJdfQ==