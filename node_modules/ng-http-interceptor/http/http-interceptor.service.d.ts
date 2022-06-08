import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { HttpInterceptor, RequestInterceptor, ResponseInterceptor } from './http-interceptor';
import { Interceptable } from './interceptable';
import { InterceptableStoreFactory } from './interceptable-store';
export declare class HttpInterceptorService implements HttpInterceptor {
    private store;
    private _requestStore;
    private _responseStore;
    private static wrapInObservable(res);
    constructor(store: InterceptableStoreFactory);
    request(url?: string | RegExp): Interceptable<RequestInterceptor>;
    response(url?: string | RegExp): Interceptable<ResponseInterceptor>;
    _interceptRequest(url: string, method: string, data: any[], context?: any): Observable<any[]>;
    _interceptResponse(url: string, method: string, response: Observable<Response>, context?: any): Observable<Response>;
}
