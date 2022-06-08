import { RequestOptions } from '@angular/http';
/**
 * @description
 * Gets http {@link RequestOptions} from data array.
 * If no options found and `alwaysOriginal = false` - returns new {@link RequestOptions}.
 * @param data - Array of http data
 * @param method - Http method
 * @param alwaysOriginal - `false` by default
 */
export declare function getHttpOptions(data: any[], method: string, alwaysOriginal?: boolean): RequestOptions;
