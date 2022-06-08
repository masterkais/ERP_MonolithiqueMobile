import { ModuleWithProviders } from '@angular/core';
/**
 * @module
 * @description
 * Library provides Http Interceptor Service for Angular 2 application
 * By default overrides angular's Http service
 * To keep original Http service use with {@see HttpInterceptorModule.noOverrideHttp()}
 */
export declare class HttpInterceptorModule {
    /**
     * Keeps original Http service and adds InterceptableHttp service
     * Requests made by Http service will not be intercepted - only those made by InterceptableHttp
     */
    static noOverrideHttp(): ModuleWithProviders;
}
export declare class HttpInterceptorNoOverrideModule {
}
