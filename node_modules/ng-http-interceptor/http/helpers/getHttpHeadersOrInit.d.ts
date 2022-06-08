import { Headers } from '@angular/http';
/**
 * @description
 * Gets {@link Headers} from data array.
 * If no {@link RequestOptions} found - creates it and updates original data array.
 * If no {@link Headers} found - creates it and sets to {@link RequestOptions}.
 * @param data - Array of http data
 * @param method - Http method
 */
export declare function getHttpHeadersOrInit(data: any[], method: string): Headers;
