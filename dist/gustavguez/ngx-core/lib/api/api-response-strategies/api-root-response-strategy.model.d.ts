import { ApiResponseStrategyInterface } from './api-response-strategy.interface';
export declare class ApiRootResponseStrategyModel implements ApiResponseStrategyInterface {
    getName(): string;
    parseJSON(json: any): any;
}
