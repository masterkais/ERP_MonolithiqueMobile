export declare const SAFE_PROXY_TRAPS: string[];
export declare function identityFactory_(ref: any): any;
export declare function identityFactory(provide: any, obj: any): {
    provide: any;
    useFactory: (ref: any) => any;
    deps: any[];
};
export declare function safeProxyHandler_(handler: any): any;
export declare function safeProxy(obj: any, handler: any): any;
