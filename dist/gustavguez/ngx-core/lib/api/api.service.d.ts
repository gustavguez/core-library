import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponseModel } from './api-response.model';
import { ApiResponseStrategyInterface } from './api-response-strategies/api-response-strategy.interface';
export declare class ApiService {
    private httpClient;
    private apiURL;
    private accessToken;
    private previousApiResponseStrategy;
    private activeApiResponseStrategy;
    private apiResponseStrategies;
    constructor(httpClient: HttpClient);
    setApiURL(apiURL: string): void;
    setAccessToken(accessToken: string): void;
    addApiResponseStrategy(strategy: ApiResponseStrategyInterface): void;
    changeApiResponseStrategy(strategyName: string): boolean;
    restoreApiResponseStrategy(): void;
    fetchData(uri: string, params?: any): Observable<ApiResponseModel>;
    getObj(uri: string, id?: any): Observable<ApiResponseModel>;
    partialUpdateObj(uri: string, id: number, obj: any): Observable<ApiResponseModel>;
    deleteObj(uri: string, id?: any): Observable<boolean>;
    createObj(uri: string, obj: any): Observable<ApiResponseModel>;
    private parseResponse;
}
