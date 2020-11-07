import { Component, Input } from '@angular/core';
import { ToastModel } from './toast.model';
import { ToastsService } from './toasts.service';
import { ArrayUtility } from '../../utilities/array.utility';
export class NgxGustavguezToastsComponent {
    // Inject services
    constructor(toastsService) {
        this.toastsService = toastsService;
        // Models
        this.toasts = [];
    }
    // On component init
    ngOnInit() {
        // Watch toast added
        this.toastsService.onToastAdded.subscribe((toast) => {
            this.openToast(toast);
        });
    }
    // Custom events
    onCloseToast(toast) {
        this.closeToast(toast);
    }
    // Private methods
    openToast(toast) {
        // Before push create timeout
        toast.timerInstance = setTimeout(() => {
            this.closeToast(toast);
        }, 3000);
        // push
        this.toasts.unshift(toast);
    }
    closeToast(toast) {
        // Check
        if (toast instanceof ToastModel) {
            ArrayUtility.find(this.toasts, toast.id, (toastFound, index) => {
                // Clear timer instance
                clearTimeout(toastFound.timerInstance);
                // Remove from array
                this.toasts.splice(index, 1);
            });
        }
    }
}
NgxGustavguezToastsComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-gustavguez-toasts',
                template: "<div \n    class=\"toasts-top-right fixed mr-2 mt-2\" \n    [style.display]=\" toasts.length ? 'block' : 'none' \">\n    <!-- Then put toasts within -->\n    <div \n        class=\"toast show fade bg-{{ toast.status }}\" \n        *ngFor=\"let toast of toasts; let i = index\">\n        <div class=\"toast-header text-light\">\n\n            <strong class=\"mr-auto\">\n                {{ brandTitle }}\n            </strong>\n\n            <button \n                (click)=\"onCloseToast(toast)\"\n                type=\"button\" \n                class=\"btn btn-link text-light\">\n                <i class=\"fas fa-times\"></i>\n            </button>\n        </div>\n\n        <div class=\"toast-body\">{{ toast.message }}</div>\n    </div>\n</div>",
                styles: [""]
            },] }
];
NgxGustavguezToastsComponent.ctorParameters = () => [
    { type: ToastsService }
];
NgxGustavguezToastsComponent.propDecorators = {
    brandTitle: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWd1c3Rhdmd1ZXotdG9hc3RzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2d1c3Rhdmd1ZXovbmd4LWNvcmUvc3JjL2xpYi9zdHJ1Y3R1cmUvbmd4LWd1c3Rhdmd1ZXotdG9hc3RzL25neC1ndXN0YXZndWV6LXRvYXN0cy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDakQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBTzdELE1BQU0sT0FBTyw0QkFBNEI7SUFPeEMsa0JBQWtCO0lBQ2xCLFlBQ1MsYUFBNEI7UUFBNUIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFMckMsU0FBUztRQUNULFdBQU0sR0FBaUIsRUFBRSxDQUFDO0lBSWUsQ0FBQztJQUUxQyxvQkFBb0I7SUFDcEIsUUFBUTtRQUNQLG9CQUFvQjtRQUNwQixJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFpQixFQUFFLEVBQUU7WUFDL0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN2QixDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7SUFFRCxnQkFBZ0I7SUFDaEIsWUFBWSxDQUFDLEtBQWlCO1FBQzdCLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDeEIsQ0FBQztJQUVELGtCQUFrQjtJQUNWLFNBQVMsQ0FBQyxLQUFpQjtRQUNsQyw2QkFBNkI7UUFDN0IsS0FBSyxDQUFDLGFBQWEsR0FBRyxVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ3JDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRVQsT0FBTztRQUNQLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFTyxVQUFVLENBQUMsS0FBaUI7UUFDbkMsUUFBUTtRQUNSLElBQUksS0FBSyxZQUFZLFVBQVUsRUFBRTtZQUNoQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLEVBQUUsRUFBRSxDQUFDLFVBQXNCLEVBQUUsS0FBYSxFQUFFLEVBQUU7Z0JBQ2xGLHVCQUF1QjtnQkFDdkIsWUFBWSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFFdkMsb0JBQW9CO2dCQUNwQixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDOUIsQ0FBQyxDQUFDLENBQUM7U0FDSDtJQUNGLENBQUM7OztZQW5ERCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLHVCQUF1QjtnQkFDakMsOHZCQUFxRDs7YUFFckQ7OztZQVBRLGFBQWE7Ozt5QkFVcEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBUb2FzdE1vZGVsIH0gZnJvbSAnLi90b2FzdC5tb2RlbCc7XG5pbXBvcnQgeyBUb2FzdHNTZXJ2aWNlIH0gZnJvbSAnLi90b2FzdHMuc2VydmljZSc7XG5pbXBvcnQgeyBBcnJheVV0aWxpdHkgfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvYXJyYXkudXRpbGl0eSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ25neC1ndXN0YXZndWV6LXRvYXN0cycsXG5cdHRlbXBsYXRlVXJsOiAnLi9uZ3gtZ3VzdGF2Z3Vlei10b2FzdHMuY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFsnLi9uZ3gtZ3VzdGF2Z3Vlei10b2FzdHMuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hHdXN0YXZndWV6VG9hc3RzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblx0Ly8gSW5wdXRzXG5cdEBJbnB1dCgpIGJyYW5kVGl0bGU6IHN0cmluZztcblxuXHQvLyBNb2RlbHNcblx0dG9hc3RzOiBUb2FzdE1vZGVsW10gPSBbXTtcblxuXHQvLyBJbmplY3Qgc2VydmljZXNcblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSB0b2FzdHNTZXJ2aWNlOiBUb2FzdHNTZXJ2aWNlKSB7IH1cblxuXHQvLyBPbiBjb21wb25lbnQgaW5pdFxuXHRuZ09uSW5pdCgpOiB2b2lkIHtcblx0XHQvLyBXYXRjaCB0b2FzdCBhZGRlZFxuXHRcdHRoaXMudG9hc3RzU2VydmljZS5vblRvYXN0QWRkZWQuc3Vic2NyaWJlKCh0b2FzdDogVG9hc3RNb2RlbCkgPT4ge1xuXHRcdFx0dGhpcy5vcGVuVG9hc3QodG9hc3QpO1xuXHRcdH0pO1xuXHR9XG5cblx0Ly8gQ3VzdG9tIGV2ZW50c1xuXHRvbkNsb3NlVG9hc3QodG9hc3Q6IFRvYXN0TW9kZWwpOiB2b2lkIHtcblx0XHR0aGlzLmNsb3NlVG9hc3QodG9hc3QpO1xuXHR9XG5cblx0Ly8gUHJpdmF0ZSBtZXRob2RzXG5cdHByaXZhdGUgb3BlblRvYXN0KHRvYXN0OiBUb2FzdE1vZGVsKTogdm9pZCB7XG5cdFx0Ly8gQmVmb3JlIHB1c2ggY3JlYXRlIHRpbWVvdXRcblx0XHR0b2FzdC50aW1lckluc3RhbmNlID0gc2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHR0aGlzLmNsb3NlVG9hc3QodG9hc3QpO1xuXHRcdH0sIDMwMDApO1xuXG5cdFx0Ly8gcHVzaFxuXHRcdHRoaXMudG9hc3RzLnVuc2hpZnQodG9hc3QpO1xuXHR9XG5cblx0cHJpdmF0ZSBjbG9zZVRvYXN0KHRvYXN0OiBUb2FzdE1vZGVsKTogdm9pZCB7XG5cdFx0Ly8gQ2hlY2tcblx0XHRpZiAodG9hc3QgaW5zdGFuY2VvZiBUb2FzdE1vZGVsKSB7XG5cdFx0XHRBcnJheVV0aWxpdHkuZmluZCh0aGlzLnRvYXN0cywgdG9hc3QuaWQsICh0b2FzdEZvdW5kOiBUb2FzdE1vZGVsLCBpbmRleDogbnVtYmVyKSA9PiB7XG5cdFx0XHRcdC8vIENsZWFyIHRpbWVyIGluc3RhbmNlXG5cdFx0XHRcdGNsZWFyVGltZW91dCh0b2FzdEZvdW5kLnRpbWVySW5zdGFuY2UpO1xuXG5cdFx0XHRcdC8vIFJlbW92ZSBmcm9tIGFycmF5XG5cdFx0XHRcdHRoaXMudG9hc3RzLnNwbGljZShpbmRleCwgMSk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cbn1cbiJdfQ==