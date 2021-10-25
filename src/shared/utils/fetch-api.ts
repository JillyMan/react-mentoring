import qs from 'qs';
import { resolveProjectReferencePath } from 'typescript';
import { Api, RequestBody } from './types/api';

interface FetchOptions<T> {
    method: string;
    body?: T;
}

const contentTypes = {
    json: 'application/json',
};

const contentTypeDataTransformers = {
    [contentTypes.json]: <T>(data: T) => JSON.stringify(data),
};

const isError = <T>(response: Response) => !response.ok;

export class FetchApi implements Api {
    private readonly serviceName: string;

    constructor(serviceName: string) {
        this.serviceName = serviceName;
    }

    private fetchData<R, T extends RequestBody = null>(
        url: string,
        options: FetchOptions<T>,
    ): Promise<R> {
        const headersForSending = {
            'Content-Type': 'application/json',
        };
        const contentTypeHeader = headersForSending['Content-Type'];
        const data = contentTypeDataTransformers[contentTypeHeader](options.body);

        return fetch(`${this.serviceName}/${url}`, {
            method: options.method,
            headers: headersForSending,
            body: data,
        })
            .then((response) =>
                response.json().then(
                    (data: R) => ({ response, data }),
                    () => ({ response, data: {} as R }),
                ),
            )
            .then(({ response, data }) => {
                if (!response.ok) {
                    throw response;
                }
                return data;
            });
    }

    private fetchDataWithRequiredParams<R, T extends RequestBody>(
        url: string,
        method: string,
        data?: T,
    ) {
        const options = {
            method,
            body: data,
        };
        return this.fetchData<R, T>(url, options);
    }

    public get<T>(url: string, params?: {}): Promise<T> {
        const queryString = qs.stringify(params, { addQueryPrefix: true });
        return this.fetchDataWithRequiredParams(`${url}${queryString}`, 'GET', undefined);
    }

    public post<Request extends RequestBody, Response>(
        url: string,
        data?: Request,
    ): Promise<Response> {
        return this.fetchDataWithRequiredParams(url, 'POST', data);
    }

    public put<Request extends RequestBody, Response>(
        url: string,
        data?: Request,
    ): Promise<Response> {
        return this.fetchDataWithRequiredParams(url, 'PUT', data);
    }

    public patch<Request extends RequestBody, Response>(
        url: string,
        data?: Request,
    ): Promise<Response> {
        return this.fetchDataWithRequiredParams(url, 'PATCH', data);
    }

    public delete<Request extends RequestBody, Response>(
        url: string,
        data?: Request,
    ): Promise<Response> {
        return this.fetchDataWithRequiredParams(url, 'DELETE', data);
    }
}
