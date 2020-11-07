import { Directive, HostBinding } from '@angular/core';
import { MainSidebarService } from '../ngx-gustavguez-main-sidebar/main-sidebar.service';
export class NgxGustavguezMainContainerDirective {
    // Inject services
    constructor(mainSidebarService) {
        this.mainSidebarService = mainSidebarService;
        // Modes
        this.classes = [
            'sidebar-mini',
            'layout-fixed',
            'layout-navbar-fixed'
        ];
    }
    // On component init
    ngOnInit() {
        // Set base classes to host classes
        this.loadHostClasses(false);
        // Watch sidebarState change
        this.mainSidebarService.onChangeState.subscribe((state) => {
            this.loadHostClasses(state);
        });
        this.mainSidebarService.onToggleState.subscribe(() => {
            this.loadHostClasses(!this.state);
        });
    }
    // Private helper methods
    loadHostClasses(state) {
        // Control index just for control
        const indexClassCollapse = this.classes.indexOf('sidebar-collapse');
        const indexClassOpen = this.classes.indexOf('sidebar-open');
        // Load state
        this.state = state;
        // Check state
        if (state) {
            this.classes.push('sidebar-open');
            this.classes.push('sidebar-collapse');
        }
        else {
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
NgxGustavguezMainContainerDirective.decorators = [
    { type: Directive, args: [{
                selector: '[ngxGustavguezMainContainer]'
            },] }
];
NgxGustavguezMainContainerDirective.ctorParameters = () => [
    { type: MainSidebarService }
];
NgxGustavguezMainContainerDirective.propDecorators = {
    hostClasses: [{ type: HostBinding, args: ['class',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWd1c3Rhdmd1ZXotbWFpbi1jb250YWluZXIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZ3VzdGF2Z3Vlei9uZ3gtY29yZS9zcmMvbGliL2xheW91dC9uZ3gtZ3VzdGF2Z3Vlei1tYWluLWNvbnRhaW5lci9uZ3gtZ3VzdGF2Z3Vlei1tYWluLWNvbnRhaW5lci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFFL0QsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0scURBQXFELENBQUM7QUFLekYsTUFBTSxPQUFPLG1DQUFtQztJQVkvQyxrQkFBa0I7SUFDbEIsWUFDUyxrQkFBc0M7UUFBdEMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQVYvQyxRQUFRO1FBQ1IsWUFBTyxHQUFhO1lBQ25CLGNBQWM7WUFDZCxjQUFjO1lBQ2QscUJBQXFCO1NBQ3JCLENBQUM7SUFLaUQsQ0FBQztJQUVwRCxvQkFBb0I7SUFDcEIsUUFBUTtRQUNQLG1DQUFtQztRQUNuQyxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRTVCLDRCQUE0QjtRQUM1QixJQUFJLENBQUMsa0JBQWtCLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQWMsRUFBRSxFQUFFO1lBQ2xFLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDN0IsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsa0JBQWtCLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7WUFDcEQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuQyxDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7SUFFRCx5QkFBeUI7SUFDakIsZUFBZSxDQUFDLEtBQWM7UUFDckMsaUNBQWlDO1FBQ2pDLE1BQU0sa0JBQWtCLEdBQVcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUM1RSxNQUFNLGNBQWMsR0FBVyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUVwRSxhQUFhO1FBQ2IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFFbkIsY0FBYztRQUNkLElBQUksS0FBSyxFQUFFO1lBQ1YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDbEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztTQUN0QzthQUFNO1lBQ04sSUFBSSxrQkFBa0IsR0FBRyxDQUFDLENBQUMsRUFBRTtnQkFDNUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFDM0M7WUFDRCxJQUFJLGNBQWMsR0FBRyxDQUFDLENBQUMsRUFBRTtnQkFDeEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQ3ZDO1NBQ0Q7UUFFRCxlQUFlO1FBQ2YsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMzQyxDQUFDOzs7WUF6REQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSw4QkFBOEI7YUFDeEM7OztZQUpRLGtCQUFrQjs7OzBCQU96QixXQUFXLFNBQUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdEJpbmRpbmcsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBNYWluU2lkZWJhclNlcnZpY2UgfSBmcm9tICcuLi9uZ3gtZ3VzdGF2Z3Vlei1tYWluLXNpZGViYXIvbWFpbi1zaWRlYmFyLnNlcnZpY2UnO1xuXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3I6ICdbbmd4R3VzdGF2Z3Vlek1haW5Db250YWluZXJdJ1xufSlcbmV4cG9ydCBjbGFzcyBOZ3hHdXN0YXZndWV6TWFpbkNvbnRhaW5lckRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cdC8vIEhvc3QgYmluZGluZ1xuXHRASG9zdEJpbmRpbmcoJ2NsYXNzJykgaG9zdENsYXNzZXM6IHN0cmluZztcblxuXHQvLyBNb2Rlc1xuXHRjbGFzc2VzOiBzdHJpbmdbXSA9IFtcblx0XHQnc2lkZWJhci1taW5pJyxcblx0XHQnbGF5b3V0LWZpeGVkJyxcblx0XHQnbGF5b3V0LW5hdmJhci1maXhlZCdcblx0XTtcblx0c3RhdGU6IGJvb2xlYW47XG5cblx0Ly8gSW5qZWN0IHNlcnZpY2VzXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgbWFpblNpZGViYXJTZXJ2aWNlOiBNYWluU2lkZWJhclNlcnZpY2UpIHsgfVxuXG5cdC8vIE9uIGNvbXBvbmVudCBpbml0XG5cdG5nT25Jbml0KCk6IHZvaWQge1xuXHRcdC8vIFNldCBiYXNlIGNsYXNzZXMgdG8gaG9zdCBjbGFzc2VzXG5cdFx0dGhpcy5sb2FkSG9zdENsYXNzZXMoZmFsc2UpO1xuXG5cdFx0Ly8gV2F0Y2ggc2lkZWJhclN0YXRlIGNoYW5nZVxuXHRcdHRoaXMubWFpblNpZGViYXJTZXJ2aWNlLm9uQ2hhbmdlU3RhdGUuc3Vic2NyaWJlKChzdGF0ZTogYm9vbGVhbikgPT4ge1xuXHRcdFx0dGhpcy5sb2FkSG9zdENsYXNzZXMoc3RhdGUpO1xuXHRcdH0pO1xuXHRcdHRoaXMubWFpblNpZGViYXJTZXJ2aWNlLm9uVG9nZ2xlU3RhdGUuc3Vic2NyaWJlKCgpID0+IHtcblx0XHRcdHRoaXMubG9hZEhvc3RDbGFzc2VzKCF0aGlzLnN0YXRlKTtcblx0XHR9KTtcblx0fVxuXG5cdC8vIFByaXZhdGUgaGVscGVyIG1ldGhvZHNcblx0cHJpdmF0ZSBsb2FkSG9zdENsYXNzZXMoc3RhdGU6IGJvb2xlYW4pOiB2b2lkIHtcblx0XHQvLyBDb250cm9sIGluZGV4IGp1c3QgZm9yIGNvbnRyb2xcblx0XHRjb25zdCBpbmRleENsYXNzQ29sbGFwc2U6IG51bWJlciA9IHRoaXMuY2xhc3Nlcy5pbmRleE9mKCdzaWRlYmFyLWNvbGxhcHNlJyk7XG5cdFx0Y29uc3QgaW5kZXhDbGFzc09wZW46IG51bWJlciA9IHRoaXMuY2xhc3Nlcy5pbmRleE9mKCdzaWRlYmFyLW9wZW4nKTtcblxuXHRcdC8vIExvYWQgc3RhdGVcblx0XHR0aGlzLnN0YXRlID0gc3RhdGU7XG5cblx0XHQvLyBDaGVjayBzdGF0ZVxuXHRcdGlmIChzdGF0ZSkge1xuXHRcdFx0dGhpcy5jbGFzc2VzLnB1c2goJ3NpZGViYXItb3BlbicpO1xuXHRcdFx0dGhpcy5jbGFzc2VzLnB1c2goJ3NpZGViYXItY29sbGFwc2UnKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKGluZGV4Q2xhc3NDb2xsYXBzZSA+IC0xKSB7XG5cdFx0XHRcdHRoaXMuY2xhc3Nlcy5zcGxpY2UoaW5kZXhDbGFzc0NvbGxhcHNlLCAxKTtcblx0XHRcdH1cblx0XHRcdGlmIChpbmRleENsYXNzT3BlbiA+IC0xKSB7XG5cdFx0XHRcdHRoaXMuY2xhc3Nlcy5zcGxpY2UoaW5kZXhDbGFzc09wZW4sIDEpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIExvYWQgY2xhc3Nlc1xuXHRcdHRoaXMuaG9zdENsYXNzZXMgPSB0aGlzLmNsYXNzZXMuam9pbignICcpO1xuXHR9XG5cbn1cbiJdfQ==