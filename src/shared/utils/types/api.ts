export type RequestBody = BodyInit | object | Array<any> | null;

export interface Api {
    get<Response>(url: string, params?: {}): Promise<Response>;
    post<Request extends RequestBody, Response>(
        url: string,
        data?: Request,
    ): Promise<Response>;
    put<Request extends RequestBody, Response>(
        url: string,
        data?: Request,
    ): Promise<Response>;
    patch<Request extends RequestBody, Response>(
        url: string,
        data?: Request,
    ): Promise<Response>;
    delete<Request extends RequestBody, Response>(
        url: string,
        data?: Request,
    ): Promise<Response>;
}
