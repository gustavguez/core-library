import { ApiResponseStrategyInterface } from './api-response-strategy.interface';
export declare class ApiDataResponseStrategyModel implements ApiResponseStrategyInterface {
    getName(): string;
    parseJSON(json: any): any;
}
