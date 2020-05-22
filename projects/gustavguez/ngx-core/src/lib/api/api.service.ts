import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { FormUtility } from '../utilities/form.utility';
import { ArrayUtility } from '../utilities/array.utility';
import { ApiResponseModel } from './api-response.model';
import { ApiResponseStrategyInterface } from './api-response-strategies/api-response-strategy.interface';
import { ApiDataResponseStrategyModel } from './api-response-strategies/api-data-response-strategy.model';
import { ApiRootResponseStrategyModel } from './api-response-strategies/api-root-response-strategy.model';

@Injectable({
	providedIn: 'root'
})
export class ApiService {

	// Models
	private apiURL: string;
	private accessToken: string;
	private previousApiResponseStrategy: ApiResponseStrategyInterface;
	private activeApiResponseStrategy: ApiResponseStrategyInterface;
	private apiResponseStrategies: ApiResponseStrategyInterface[];

	// Service constructor
	constructor(
		private httpClient: HttpClient) {
		// Load data strategy by default
		this.apiResponseStrategies = [
			new ApiDataResponseStrategyModel(),
			new ApiRootResponseStrategyModel()
		];

		// Set as active
		this.activeApiResponseStrategy = this.apiResponseStrategies[0];
	}

	// Setters
	public setApiURL(apiURL: string): void {
		this.apiURL = apiURL;
	}

	public setAccessToken(accessToken: string): void {
		this.accessToken = accessToken;
	}

	// Add strategy method
	public addApiResponseStrategy(strategy: ApiResponseStrategyInterface): void {
		if (strategy.getName()) {
			this.apiResponseStrategies.push(strategy);
		}
	}

	// Change active strategy
	public changeApiResponseStrategy(strategyName: string): boolean {
		let hasChanged: boolean = false;

		// Check current are equal
		if (this.activeApiResponseStrategy.getName() === strategyName) {
			return hasChanged;
		}

		// Find strategy
		ArrayUtility.every(this.apiResponseStrategies, (strategy: ApiResponseStrategyInterface) => {
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
	public restoreApiResponseStrategy(): void {
		// Check prev are not empty and is different
		if (this.previousApiResponseStrategy !== undefined
			&& this.previousApiResponseStrategy.getName() !== this.activeApiResponseStrategy.getName()) {
			this.activeApiResponseStrategy = this.previousApiResponseStrategy;
		}
	}

	// Fetch
	public fetchData(uri: string, params?: any): Observable<ApiResponseModel> {
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
				map((response: any) => this.parseResponse(response))
			);
	}

	// Fetch
	public getObj(uri: string, id?: any): Observable<ApiResponseModel> {
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
				map((response: any) => this.parseResponse(response))
			);
	}

	// Update an object using PATCH
	public partialUpdateObj(uri: string, id: number, obj: any): Observable<ApiResponseModel> {
		// Post options
		const httpOptions = {
			headers: new HttpHeaders({
				Authorization: 'Bearer ' + this.accessToken
			})
		};

		// Url
		const url: string = this.apiURL + uri + '/' + id;

		// Do request
		return this.httpClient
			.patch(url, obj, httpOptions)
			.pipe(
				// Map response
				map((response: any) => this.parseResponse(response))
			);
	}

	// Delete an object using DELETE
	public deleteObj(uri: string, id?: any): Observable<boolean> {
		// Post options
		const httpOptions = {
			headers: new HttpHeaders({
				'Authorization': 'Bearer ' + this.accessToken
			})
		};

		// Url
		const url: string = this.apiURL + uri + (id ? '/' + id : '');

		// Do request
		return this.httpClient
			.delete(url, httpOptions)
			.pipe(
				// Map response
				map(() => true)
			);
	}

	// Create an object with POST
	public createObj(uri: string, obj: any): Observable<ApiResponseModel> {
		// Post options
		const httpOptions = {
			headers: new HttpHeaders({
				Authorization: 'Bearer ' + this.accessToken
			})
		};

		// Url
		const url: string = this.apiURL + uri;

		// Check form data
		if (FormUtility.needFormData(obj)) {
			obj = FormUtility.jsonToFormData(obj);
		}

		// Do request
		return this.httpClient
			.post(url, obj, httpOptions)
			.pipe(
				// Map response
				map((response: any) => this.parseResponse(response))
			);
	}

	// Parse response
	private parseResponse(response: any): ApiResponseModel {
		// Current response
		const resp: ApiResponseModel = new ApiResponseModel();

		// CHECK RESPONSE
		resp.data = this.activeApiResponseStrategy.parseJSON(response);

		// Return api response model
		return resp;
	}

}
