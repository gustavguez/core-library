import { Pipe } from '@angular/core';
import { DateUtility } from '../../utilities/date.utility';
export class NgxGustavguezPrettyDatePipe {
    transform(value, ...args) {
        return DateUtility.prettyDate(value, args.length ? args[0] : true);
    }
}
NgxGustavguezPrettyDatePipe.decorators = [
    { type: Pipe, args: [{
                name: 'ngxGustavguezPrettyDate'
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWd1c3Rhdmd1ZXotcHJldHR5LWRhdGUucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2d1c3Rhdmd1ZXovbmd4LWNvcmUvc3JjL2xpYi9waXBlcy9uZ3gtZ3VzdGF2Z3Vlei1wcmV0dHktZGF0ZS9uZ3gtZ3VzdGF2Z3Vlei1wcmV0dHktZGF0ZS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBRXBELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUszRCxNQUFNLE9BQU8sMkJBQTJCO0lBRXZDLFNBQVMsQ0FBQyxLQUFVLEVBQUUsR0FBRyxJQUFXO1FBQ25DLE9BQU8sV0FBVyxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwRSxDQUFDOzs7WUFQRCxJQUFJLFNBQUM7Z0JBQ0wsSUFBSSxFQUFFLHlCQUF5QjthQUMvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRGF0ZVV0aWxpdHkgfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvZGF0ZS51dGlsaXR5JztcblxuQFBpcGUoe1xuXHRuYW1lOiAnbmd4R3VzdGF2Z3VlelByZXR0eURhdGUnXG59KVxuZXhwb3J0IGNsYXNzIE5neEd1c3Rhdmd1ZXpQcmV0dHlEYXRlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG5cdHRyYW5zZm9ybSh2YWx1ZTogYW55LCAuLi5hcmdzOiBhbnlbXSk6IGFueSB7XG5cdFx0cmV0dXJuIERhdGVVdGlsaXR5LnByZXR0eURhdGUodmFsdWUsIGFyZ3MubGVuZ3RoID8gYXJnc1swXSA6IHRydWUpO1xuXHR9XG5cbn1cbiJdfQ==