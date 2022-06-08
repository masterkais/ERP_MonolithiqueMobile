import { Http, RequestOptions, ConnectionBackend } from '@angular/http';
export declare class InterceptableHttp extends Http {
    constructor(_backend: ConnectionBackend, _defaultOptions: RequestOptions);
}
export declare const InterceptableHttpProviders: {
    provide: any;
    useFactory: (ref: any) => any;
    deps: any[];
}[];
