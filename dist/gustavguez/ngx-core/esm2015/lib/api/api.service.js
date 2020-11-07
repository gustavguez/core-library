import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { FormUtility } from '../utilities/form.utility';
import { ArrayUtility } from '../utilities/array.utility';
import { ApiResponseModel } from './api-response.model';
import { ApiDataResponseStrategyModel } from './api-response-strategies/api-data-response-strategy.model';
import { ApiRootResponseStrategyModel } from './api-response-strategies/api-root-response-strategy.model';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class ApiService {
    // Service constructor
    constructor(httpClient) {
        this.httpClient = httpClient;
        // Load data strategy by default
        this.apiResponseStrategies = [
            new ApiDataResponseStrategyModel(),
            new ApiRootResponseStrategyModel()
        ];
        // Set as active
        this.activeApiResponseStrategy = this.apiResponseStrategies[0];
    }
    // Setters
    setApiURL(apiURL) {
        this.apiURL = apiURL;
    }
    setAccessToken(accessToken) {
        this.accessToken = accessToken;
    }
    // Add strategy method
    addApiResponseStrategy(strategy) {
        if (strategy.getName()) {
            this.apiResponseStrategies.push(strategy);
        }
    }
    // Change active strategy
    changeApiResponseStrategy(strategyName) {
        let hasChanged = false;
        // Check current are equal
        if (this.activeApiResponseStrategy.getName() === strategyName) {
            return hasChanged;
        }
        // Find strategy
        ArrayUtility.every(this.apiResponseStrategies, (strategy) => {
            // Check name
            if (strategy.getName() === strategyName) {
                // Save previous
                this.previousApiResponseStrategy = this.activeApiResponseStrategy;
                // Load new stategy
                this.activeApiResponseStrategy = strategy;
                // Mark has changed
                hasChanged = true;
            }
            return !hasChanged;
        });
        return hasChanged;
    }
    // Restore prev active stategy
    restoreApiResponseStrategy() {
        // Check prev are not empty and is different
        if (this.previousApiResponseStrategy !== undefined
            && this.previousApiResponseStrategy.getName() !== this.activeApiResponseStrategy.getName()) {
            this.activeApiResponseStrategy = this.previousApiResponseStrategy;
        }
    }
    // Fetch
    fetchData(uri, params) {
        // Check cache of observables
        // Get options
        const httpOptions = {
            headers: new HttpHeaders({
                Authorization: 'Bearer ' + this.accessToken
            }),
            params: params
        };
        // Do request
        return this.httpClient
            .get(this.apiURL + uri, httpOptions)
            .pipe(
        // Map response
        map((response) => this.parseResponse(response)));
    }
    // Fetch
    getObj(uri, id) {
        // Check cache of observables
        // Get options
        const httpOptions = {
            headers: new HttpHeaders({
                Authorization: 'Bearer ' + this.accessToken
            })
        };
        // Do request
        return this.httpClient
            .get(this.apiURL + uri + (id ? '/' + id : ''), httpOptions)
            .pipe(
        // Map response
        map((response) => this.parseResponse(response)));
    }
    // Update an object using PATCH
    partialUpdateObj(uri, id, obj) {
        // Post options
        const httpOptions = {
            headers: new HttpHeaders({
                Authorization: 'Bearer ' + this.accessToken
            })
        };
        // Url
        const url = this.apiURL + uri + '/' + id;
        // Do request
        return this.httpClient
            .patch(url, obj, httpOptions)
            .pipe(
        // Map response
        map((response) => this.parseResponse(response)));
    }
    // Delete an object using DELETE
    deleteObj(uri, id) {
        // Post options
        const httpOptions = {
            headers: new HttpHeaders({
                'Authorization': 'Bearer ' + this.accessToken
            })
        };
        // Url
        const url = this.apiURL + uri + (id ? '/' + id : '');
        // Do request
        return this.httpClient
            .delete(url, httpOptions)
            .pipe(
        // Map response
        map(() => true));
    }
    // Create an object with POST
    createObj(uri, obj) {
        // Post options
        const httpOptions = {
            headers: new HttpHeaders({
                Authorization: 'Bearer ' + this.accessToken
            })
        };
        // Url
        const url = this.apiURL + uri;
        // Check form data
        if (FormUtility.needFormData(obj)) {
            obj = FormUtility.jsonToFormData(obj);
        }
        // Do request
        return this.httpClient
            .post(url, obj, httpOptions)
            .pipe(
        // Map response
        map((response) => this.parseResponse(response)));
    }
    // Parse response
    parseResponse(response) {
        // Current response
        const resp = new ApiResponseModel();
        // CHECK RESPONSE
        resp.data = this.activeApiResponseStrategy.parseJSON(response);
        // Return api response model
        return resp;
    }
}
ApiService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ApiService_Factory() { return new ApiService(i0.ɵɵinject(i1.HttpClient)); }, token: ApiService, providedIn: "root" });
ApiService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
ApiService.ctorParameters = () => [
    { type: HttpClient }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9ndXN0YXZndWV6L25neC1jb3JlL3NyYy9saWIvYXBpL2FwaS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUUvRCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUV4RCxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSw0REFBNEQsQ0FBQztBQUMxRyxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSw0REFBNEQsQ0FBQzs7O0FBSzFHLE1BQU0sT0FBTyxVQUFVO0lBU3RCLHNCQUFzQjtJQUN0QixZQUNTLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDOUIsZ0NBQWdDO1FBQ2hDLElBQUksQ0FBQyxxQkFBcUIsR0FBRztZQUM1QixJQUFJLDRCQUE0QixFQUFFO1lBQ2xDLElBQUksNEJBQTRCLEVBQUU7U0FDbEMsQ0FBQztRQUVGLGdCQUFnQjtRQUNoQixJQUFJLENBQUMseUJBQXlCLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFRCxVQUFVO0lBQ0gsU0FBUyxDQUFDLE1BQWM7UUFDOUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDdEIsQ0FBQztJQUVNLGNBQWMsQ0FBQyxXQUFtQjtRQUN4QyxJQUFJLENBQUMs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QUNKLENBQUM7SUFFRCw2QkFBNkI7SUFDdEIsU0FBUyxDQUFDLEdBQVcsRUFBRSxHQUFRO1FBQ3JDLGVBQWU7UUFDZixNQUFNLFdBQVcsR0FBRztZQUNuQixPQUFPLEVBQUUsSUFBSSxXQUFXLENBQUM7Z0JBQ3hCLGFBQWEsRUFBRSxTQUFTLEdBQUcsSUFBSSxDQUFDLFdBQVc7YUFDM0MsQ0FBQztTQUNGLENBQUM7UUFFRixNQUFNO1FBQ04sTUFBTSxHQUFHLEdBQVcsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7UUFFdEMsa0JBQWtCO1FBQ2xCLElBQUksV0FBVyxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNsQyxHQUFHLEdBQUcsV0FBVyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUN0QztRQUVELGFBQWE7UUFDYixPQUFPLElBQUksQ0FBQyxVQUFVO2FBQ3BCLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFdBQVcsQ0FBQzthQUMzQixJQUFJO1FBQ0osZUFBZTtRQUNmLEdBQUcsQ0FBQyxDQUFDLFFBQWEsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUNwRCxDQUFDO0lBQ0osQ0FBQztJQUVELGlCQUFpQjtJQUNULGFBQWEsQ0FBQyxRQUFhO1FBQ2xDLG1CQUFtQjtRQUNuQixNQUFNLElBQUksR0FBcUIsSUFBSSxnQkFBZ0IsRUFBRSxDQUFDO1FBRXRELGlCQUFpQjtRQUNqQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFL0QsNEJBQTRCO1FBQzVCLE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQzs7OztZQXBNRCxVQUFVLFNBQUM7Z0JBQ1gsVUFBVSxFQUFFLE1BQU07YUFDbEI7OztZQWJRLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgRm9ybVV0aWxpdHkgfSBmcm9tICcuLi91dGlsaXRpZXMvZm9ybS51dGlsaXR5JztcbmltcG9ydCB7IEFycmF5VXRpbGl0eSB9IGZyb20gJy4uL3V0aWxpdGllcy9hcnJheS51dGlsaXR5JztcbmltcG9ydCB7IEFwaVJlc3BvbnNlTW9kZWwgfSBmcm9tICcuL2FwaS1yZXNwb25zZS5tb2RlbCc7XG5pbXBvcnQgeyBBcGlSZXNwb25zZVN0cmF0ZWd5SW50ZXJmYWNlIH0gZnJvbSAnLi9hcGktcmVzcG9uc2Utc3RyYXRlZ2llcy9hcGktcmVzcG9uc2Utc3RyYXRlZ3kuaW50ZXJmYWNlJztcbmltcG9ydCB7IEFwaURhdGFSZXNwb25zZVN0cmF0ZWd5TW9kZWwgfSBmcm9tICcuL2FwaS1yZXNwb25zZS1zdHJhdGVnaWVzL2FwaS1kYXRhLXJlc3BvbnNlLXN0cmF0ZWd5Lm1vZGVsJztcbmltcG9ydCB7IEFwaVJvb3RSZXNwb25zZVN0cmF0ZWd5TW9kZWwgfSBmcm9tICcuL2FwaS1yZXNwb25zZS1zdHJhdGVnaWVzL2FwaS1yb290LXJlc3BvbnNlLXN0cmF0ZWd5Lm1vZGVsJztcblxuQEluamVjdGFibGUoe1xuXHRwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQXBpU2VydmljZSB7XG5cblx0Ly8gTW9kZWxzXG5cdHByaXZhdGUgYXBpVVJMOiBzdHJpbmc7XG5cdHByaXZhdGUgYWNjZXNzVG9rZW46IHN0cmluZztcblx0cHJpdmF0ZSBwcmV2aW91c0FwaVJlc3BvbnNlU3RyYXRlZ3k6IEFwaVJlc3BvbnNlU3RyYXRlZ3lJbnRlcmZhY2U7XG5cdHByaXZhdGUgYWN0aXZlQXBpUmVzcG9uc2VTdHJhdGVneTogQXBpUmVzcG9uc2VTdHJhdGVneUludGVyZmFjZTtcblx0cHJpdmF0ZSBhcGlSZXNwb25zZVN0cmF0ZWdpZXM6IEFwaVJlc3BvbnNlU3RyYXRlZ3lJbnRlcmZhY2VbXTtcblxuXHQvLyBTZXJ2aWNlIGNvbnN0cnVjdG9yXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgaHR0cENsaWVudDogSHR0cENsaWVudCkge1xuXHRcdC8vIExvYWQgZGF0YSBzdHJhdGVneSBieSBkZWZhdWx0XG5cdFx0dGhpcy5hcGlSZXNwb25zZVN0cmF0ZWdpZXMgPSBbXG5cdFx0XHRuZXcgQXBpRGF0YVJlc3BvbnNlU3RyYXRlZ3lNb2RlbCgpLFxuXHRcdFx0bmV3IEFwaVJvb3RSZXNwb25zZVN0cmF0ZWd5TW9kZWwoKVxuXHRcdF07XG5cblx0XHQvLyBTZXQgYXMgYWN0aXZlXG5cdFx0dGhpcy5hY3RpdmVBcGlSZXNwb25zZVN0cmF0ZWd5ID0gdGhpcy5hcGlSZXNwb25zZVN0cmF0ZWdpZXNbMF07XG5cdH1cblxuXHQvLyBTZXR0ZXJzXG5cdHB1YmxpYyBzZXRBcGlVUkwoYXBpVVJMOiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLmFwaVVSTCA9IGFwaVVSTDtcblx0fVxuXG5cdHB1YmxpYyBzZXRBY2Nlc3NUb2tlbihhY2Nlc3NUb2tlbjogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5hY2Nlc3NUb2tlbiA9IGFjY2Vzc1Rva2VuO1xuXHR9XG5cblx0Ly8gQWRkIHN0cmF0ZWd5IG1ldGhvZFxuXHRwdWJsaWMgYWRkQXBpUmVzcG9uc2VTdHJhdGVneShzdHJhdGVneTogQXBpUmVzcG9uc2VTdHJhdGVneUludGVyZmFjZSk6IHZvaWQge1xuXHRcdGlmIChzdHJhdGVneS5nZXROYW1lKCkpIHtcblx0XHRcdHRoaXMuYXBpUmVzcG9uc2VTdHJhdGVnaWVzLnB1c2goc3RyYXRlZ3kpO1xuXHRcdH1cblx0fVxuXG5cdC8vIENoYW5nZSBhY3RpdmUgc3RyYXRlZ3lcblx0cHVibGljIGNoYW5nZUFwaVJlc3BvbnNlU3RyYXRlZ3koc3RyYXRlZ3lOYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcblx0XHRsZXQgaGFzQ2hhbmdlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdFx0Ly8gQ2hlY2sgY3VycmVudCBhcmUgZXF1YWxcblx0XHRpZiAodGhpcy5hY3RpdmVBcGlSZXNwb25zZVN0cmF0ZWd5LmdldE5hbWUoKSA9PT0gc3RyYXRlZ3lOYW1lKSB7XG5cdFx0XHRyZXR1cm4gaGFzQ2hhbmdlZDtcblx0XHR9XG5cblx0XHQvLyBGaW5kIHN0cmF0ZWd5XG5cdFx0QXJyYXlVdGlsaXR5LmV2ZXJ5KHRoaXMuYXBpUmVzcG9uc2VTdHJhdGVnaWVzLCAoc3RyYXRlZ3k6IEFwaVJlc3BvbnNlU3RyYXRlZ3lJbnRlcmZhY2UpID0+IHtcblx0XHRcdC8vIENoZWNrIG5hbWVcblx0XHRcdGlmIChzdHJhdGVneS5nZXROYW1lKCkgPT09IHN0cmF0ZWd5TmFtZSkge1xuXHRcdFx0XHQvLyBTYXZlIHByZXZpb3VzXG5cdFx0XHRcdHRoaXMucHJldmlvdXNBcGlSZXNwb25zZVN0cmF0ZWd5ID0gdGhpcy5hY3RpdmVBcGlSZXNwb25zZVN0cmF0ZWd5O1xuXG5cdFx0XHRcdC8vIExvYWQgbmV3IHN0YXRlZ3lcblx0XHRcdFx0dGhpcy5hY3RpdmVBcGlSZXNwb25zZVN0cmF0ZWd5ID0gc3RyYXRlZ3k7XG5cblx0XHRcdFx0Ly8gTWFyayBoYXMgY2hhbmdlZFxuXHRcdFx0XHRoYXNDaGFuZ2VkID0gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdHJldHVybiAhaGFzQ2hhbmdlZDtcblx0XHR9KTtcblx0XHRyZXR1cm4gaGFzQ2hhbmdlZDtcblx0fVxuXG5cdC8vIFJlc3RvcmUgcHJldiBhY3RpdmUgc3RhdGVneVxuXHRwdWJsaWMgcmVzdG9yZUFwaVJlc3BvbnNlU3RyYXRlZ3koKTogdm9pZCB7XG5cdFx0Ly8gQ2hlY2sgcHJldiBhcmUgbm90IGVtcHR5IGFuZCBpcyBkaWZmZXJlbnRcblx0XHRpZiAodGhpcy5wcmV2aW91c0FwaVJlc3BvbnNlU3RyYXRlZ3kgIT09IHVuZGVmaW5lZFxuXHRcdFx0JiYgdGhpcy5wcmV2aW91c0FwaVJlc3BvbnNlU3RyYXRlZ3kuZ2V0TmFtZSgpICE9PSB0aGlzLmFjdGl2ZUFwaVJlc3BvbnNlU3RyYXRlZ3kuZ2V0TmFtZSgpKSB7XG5cdFx0XHR0aGlzLmFjdGl2ZUFwaVJlc3BvbnNlU3RyYXRlZ3kgPSB0aGlzLnByZXZpb3VzQXBpUmVzcG9uc2VTdHJhdGVneTtcblx0XHR9XG5cdH1cblxuXHQvLyBGZXRjaFxuXHRwdWJsaWMgZmV0Y2hEYXRhKHVyaTogc3RyaW5nLCBwYXJhbXM/OiBhbnkpOiBPYnNlcnZhYmxlPEFwaVJlc3BvbnNlTW9kZWw+IHtcblx0XHQvLyBDaGVjayBjYWNoZSBvZiBvYnNlcnZhYmxlc1xuXG5cdFx0Ly8gR2V0IG9wdGlvbnNcblx0XHRjb25zdCBodHRwT3B0aW9ucyA9IHtcblx0XHRcdGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG5cdFx0XHRcdEF1dGhvcml6YXRpb246ICdCZWFyZXIgJyArIHRoaXMuYWNjZXNzVG9rZW5cblx0XHRcdH0pLFxuXHRcdFx0cGFyYW1zOiBwYXJhbXNcblx0XHR9O1xuXG5cdFx0Ly8gRG8gcmVxdWVzdFxuXHRcdHJldHVybiB0aGlzLmh0dHBDbGllbnRcblx0XHRcdC5nZXQodGhpcy5hcGlVUkwgKyB1cmksIGh0dHBPcHRpb25zKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdC8vIE1hcCByZXNwb25zZVxuXHRcdFx0XHRtYXAoKHJlc3BvbnNlOiBhbnkpID0+IHRoaXMucGFyc2VSZXNwb25zZShyZXNwb25zZSkpXG5cdFx0XHQpO1xuXHR9XG5cblx0Ly8gRmV0Y2hcblx0cHVibGljIGdldE9iaih1cmk6IHN0cmluZywgaWQ/OiBhbnkpOiBPYnNlcnZhYmxlPEFwaVJlc3BvbnNlTW9kZWw+IHtcblx0XHQvLyBDaGVjayBjYWNoZSBvZiBvYnNlcnZhYmxlc1xuXG5cdFx0Ly8gR2V0IG9wdGlvbnNcblx0XHRjb25zdCBodHRwT3B0aW9ucyA9IHtcblx0XHRcdGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG5cdFx0XHRcdEF1dGhvcml6YXRpb246ICdCZWFyZXIgJyArIHRoaXMuYWNjZXNzVG9rZW5cblx0XHRcdH0pXG5cdFx0fTtcblxuXHRcdC8vIERvIHJlcXVlc3Rcblx0XHRyZXR1cm4gdGhpcy5odHRwQ2xpZW50XG5cdFx0XHQuZ2V0KHRoaXMuYXBpVVJMICsgdXJpICsgKGlkID8gJy8nICsgaWQgOiAnJyksIGh0dHBPcHRpb25zKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdC8vIE1hcCByZXNwb25zZVxuXHRcdFx0XHRtYXAoKHJlc3BvbnNlOiBhbnkpID0+IHRoaXMucGFyc2VSZXNwb25zZShyZXNwb25zZSkpXG5cdFx0XHQpO1xuXHR9XG5cblx0Ly8gVXBkYXRlIGFuIG9iamVjdCB1c2luZyBQQVRDSFxuXHRwdWJsaWMgcGFydGlhbFVwZGF0ZU9iaih1cmk6IHN0cmluZywgaWQ6IG51bWJlciwgb2JqOiBhbnkpOiBPYnNlcnZhYmxlPEFwaVJlc3BvbnNlTW9kZWw+IHtcblx0XHQvLyBQb3N0IG9wdGlvbnNcblx0XHRjb25zdCBodHRwT3B0aW9ucyA9IHtcblx0XHRcdGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG5cdFx0XHRcdEF1dGhvcml6YXRpb246ICdCZWFyZXIgJyArIHRoaXMuYWNjZXNzVG9rZW5cblx0XHRcdH0pXG5cdFx0fTtcblxuXHRcdC8vIFVybFxuXHRcdGNvbnN0IHVybDogc3RyaW5nID0gdGhpcy5hcGlVUkwgKyB1cmkgKyAnLycgKyBpZDtcblxuXHRcdC8vIERvIHJlcXVlc3Rcblx0XHRyZXR1cm4gdGhpcy5odHRwQ2xpZW50XG5cdFx0XHQucGF0Y2godXJsLCBvYmosIGh0dHBPcHRpb25zKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdC8vIE1hcCByZXNwb25zZVxuXHRcdFx0XHRtYXAoKHJlc3BvbnNlOiBhbnkpID0+IHRoaXMucGFyc2VSZXNwb25zZShyZXNwb25zZSkpXG5cdFx0XHQpO1xuXHR9XG5cblx0Ly8gRGVsZXRlIGFuIG9iamVjdCB1c2luZyBERUxFVEVcblx0cHVibGljIGRlbGV0ZU9iaih1cmk6IHN0cmluZywgaWQ/OiBhbnkpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcblx0XHQvLyBQb3N0IG9wdGlvbnNcblx0XHRjb25zdCBodHRwT3B0aW9ucyA9IHtcblx0XHRcdGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG5cdFx0XHRcdCdBdXRob3JpemF0aW9uJzogJ0JlYXJlciAnICsgdGhpcy5hY2Nlc3NUb2tlblxuXHRcdFx0fSlcblx0XHR9O1xuXG5cdFx0Ly8gVXJsXG5cdFx0Y29uc3QgdXJsOiBzdHJpbmcgPSB0aGlzLmFwaVVSTCArIHVyaSArIChpZCA/ICcvJyArIGlkIDogJycpO1xuXG5cdFx0Ly8gRG8gcmVxdWVzdFxuXHRcdHJldHVybiB0aGlzLmh0dHBDbGllbnRcblx0XHRcdC5kZWxldGUodXJsLCBodHRwT3B0aW9ucylcblx0XHRcdC5waXBlKFxuXHRcdFx0XHQvLyBNYXAgcmVzcG9uc2Vcblx0XHRcdFx0bWFwKCgpID0+IHRydWUpXG5cdFx0XHQpO1xuXHR9XG5cblx0Ly8gQ3JlYXRlIGFuIG9iamVjdCB3aXRoIFBPU1Rcblx0cHVibGljIGNyZWF0ZU9iaih1cmk6IHN0cmluZywgb2JqOiBhbnkpOiBPYnNlcnZhYmxlPEFwaVJlc3BvbnNlTW9kZWw+IHtcblx0XHQvLyBQb3N0IG9wdGlvbnNcblx0XHRjb25zdCBodHRwT3B0aW9ucyA9IHtcblx0XHRcdGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG5cdFx0XHRcdEF1dGhvcml6YXRpb246ICdCZWFyZXIgJyArIHRoaXMuYWNjZXNzVG9rZW5cblx0XHRcdH0pXG5cdFx0fTtcblxuXHRcdC8vIFVybFxuXHRcdGNvbnN0IHVybDogc3RyaW5nID0gdGhpcy5hcGlVUkwgKyB1cmk7XG5cblx0XHQvLyBDaGVjayBmb3JtIGRhdGFcblx0XHRpZiAoRm9ybVV0aWxpdHkubmVlZEZvcm1EYXRhKG9iaikpIHtcblx0XHRcdG9iaiA9IEZvcm1VdGlsaXR5Lmpzb25Ub0Zvcm1EYXRhKG9iaik7XG5cdFx0fVxuXG5cdFx0Ly8gRG8gcmVxdWVzdFxuXHRcdHJldHVybiB0aGlzLmh0dHBDbGllbnRcblx0XHRcdC5wb3N0KHVybCwgb2JqLCBodHRwT3B0aW9ucylcblx0XHRcdC5waXBlKFxuXHRcdFx0XHQvLyBNYXAgcmVzcG9uc2Vcblx0XHRcdFx0bWFwKChyZXNwb25zZTogYW55KSA9PiB0aGlzLnBhcnNlUmVzcG9uc2UocmVzcG9uc2UpKVxuXHRcdFx0KTtcblx0fVxuXG5cdC8vIFBhcnNlIHJlc3BvbnNlXG5cdHByaXZhdGUgcGFyc2VSZXNwb25zZShyZXNwb25zZTogYW55KTogQXBpUmVzcG9uc2VNb2RlbCB7XG5cdFx0Ly8gQ3VycmVudCByZXNwb25zZVxuXHRcdGNvbnN0IHJlc3A6IEFwaVJlc3BvbnNlTW9kZWwgPSBuZXcgQXBpUmVzcG9uc2VNb2RlbCgpO1xuXG5cdFx0Ly8gQ0hFQ0sgUkVTUE9OU0Vcblx0XHRyZXNwLmRhdGEgPSB0aGlzLmFjdGl2ZUFwaVJlc3BvbnNlU3RyYXRlZ3kucGFyc2VKU09OKHJlc3BvbnNlKTtcblxuXHRcdC8vIFJldHVybiBhcGkgcmVzcG9uc2UgbW9kZWxcblx0XHRyZXR1cm4gcmVzcDtcblx0fVxuXG59XG4iXX0=