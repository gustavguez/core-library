export class ApiDataResponseStrategyModel {
    getName() {
        return 'data';
    }
    parseJSON(json) {
        // Init data
        let data = null;
        // Check key data in json
        if (json && json.data) {
            data = json.data;
        }
        return data;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLWRhdGEtcmVzcG9uc2Utc3RyYXRlZ3kubW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9ndXN0YXZndWV6L25neC1jb3JlL3NyYy9saWIvYXBpL2FwaS1yZXNwb25zZS1zdHJhdGVnaWVzL2FwaS1kYXRhLXJlc3BvbnNlLXN0cmF0ZWd5Lm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE1BQU0sT0FBTyw0QkFBNEI7SUFFakMsT0FBTztRQUNiLE9BQU8sTUFBTSxDQUFDO0lBQ2YsQ0FBQztJQUVNLFNBQVMsQ0FBQyxJQUFTO1FBQ3pCLFlBQVk7UUFDWixJQUFJLElBQUksR0FBUSxJQUFJLENBQUM7UUFFckIseUJBQXlCO1FBQ3pCLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDdEIsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7U0FDakI7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNiLENBQUM7Q0FFRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwaVJlc3BvbnNlU3RyYXRlZ3lJbnRlcmZhY2UgfSBmcm9tICcuL2FwaS1yZXNwb25zZS1zdHJhdGVneS5pbnRlcmZhY2UnO1xuXG5leHBvcnQgY2xhc3MgQXBpRGF0YVJlc3BvbnNlU3RyYXRlZ3lNb2RlbCBpbXBsZW1lbnRzIEFwaVJlc3BvbnNlU3RyYXRlZ3lJbnRlcmZhY2V7XG5cblx0cHVibGljIGdldE5hbWUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gJ2RhdGEnO1xuXHR9XG5cblx0cHVibGljIHBhcnNlSlNPTihqc29uOiBhbnkpOiBhbnkge1xuXHRcdC8vIEluaXQgZGF0YVxuXHRcdGxldCBkYXRhOiBhbnkgPSBudWxsO1xuXG5cdFx0Ly8gQ2hlY2sga2V5IGRhdGEgaW4ganNvblxuXHRcdGlmIChqc29uICYmIGpzb24uZGF0YSkge1xuXHRcdFx0ZGF0YSA9IGpzb24uZGF0YTtcblx0XHR9XG5cdFx0cmV0dXJuIGRhdGE7XG5cdH1cblxufVxuIl19