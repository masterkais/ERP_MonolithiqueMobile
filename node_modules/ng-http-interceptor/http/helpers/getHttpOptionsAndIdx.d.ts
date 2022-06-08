import { RequestOptions } from '@angular/http';
/**
 * @description
 * Gets {@link RequestOptions} and it's index location in data array.
 * If no options found and `alwaysOriginal = false` - creates new {@link RequestOptions}.
 * @param data - Array of http data
 * @param method - Http method
 * @param alwaysOriginal - `false` by default
 */
export declare function getHttpOptionsAndIdx(data: any[], method: string, alwaysOriginal?: boolean): {
    options: RequestOptions;
    idx: number;
};
