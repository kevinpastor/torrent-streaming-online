export const enum ErrorCode {
    ServiceWorkerUnsupported,
    ServiceWorkerNull,
    ServiceWorkerTimeout
}

export class KnownError extends Error {
    constructor(public code: ErrorCode, ...args: ConstructorParameters<typeof Error>) {
        super(...args);
    }
}