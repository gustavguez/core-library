import { TableShowActionModel } from './actions/table-show-action.model';
export class TableOptionsModel {
    // Contructor
    constructor(headers, fields) {
        this.headers = headers;
        this.fields = fields;
        // Default actions
        this.actions = [new TableShowActionModel()];
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtb3B0aW9ucy5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2d1c3Rhdmd1ZXovbmd4LWNvcmUvc3JjL2xpYi9zdHJ1Y3R1cmUvbmd4LWd1c3Rhdmd1ZXotdGFibGUvdGFibGUtb3B0aW9ucy5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUV6RSxNQUFNLE9BQU8saUJBQWlCO0lBSzdCLGFBQWE7SUFDYixZQUNRLE9BQTJCLEVBQzNCLE1BQWdCO1FBRGhCLFlBQU8sR0FBUCxPQUFPLENBQW9CO1FBQzNCLFdBQU0sR0FBTixNQUFNLENBQVU7UUFFdkIsa0JBQWtCO1FBQ2xCLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxJQUFJLG9CQUFvQixFQUFFLENBQUMsQ0FBQztJQUM3QyxDQUFDO0NBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUYWJsZUhlYWRlck1vZGVsIH0gZnJvbSAnLi90YWJsZS1oZWFkZXIubW9kZWwnO1xuaW1wb3J0IHsgVGFibGVBY3Rpb25Nb2RlbCB9IGZyb20gJy4vdGFibGUtYWN0aW9uLm1vZGVsJztcbmltcG9ydCB7IFRhYmxlU2hvd0FjdGlvbk1vZGVsIH0gZnJvbSAnLi9hY3Rpb25zL3RhYmxlLXNob3ctYWN0aW9uLm1vZGVsJztcblxuZXhwb3J0IGNsYXNzIFRhYmxlT3B0aW9uc01vZGVsIHtcblxuXHQvLyBNb2RlbHNcblx0cHVibGljIGFjdGlvbnM6IFRhYmxlQWN0aW9uTW9kZWxbXTtcblxuXHQvLyBDb250cnVjdG9yXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHB1YmxpYyBoZWFkZXJzOiBUYWJsZUhlYWRlck1vZGVsW10sXG5cdFx0cHVibGljIGZpZWxkczogc3RyaW5nW11cblx0KSB7XG5cdFx0Ly8gRGVmYXVsdCBhY3Rpb25zXG5cdFx0dGhpcy5hY3Rpb25zID0gW25ldyBUYWJsZVNob3dBY3Rpb25Nb2RlbCgpXTtcblx0fVxufVxuIl19