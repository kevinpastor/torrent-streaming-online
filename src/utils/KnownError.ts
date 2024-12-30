export const enum KnownErrorCode {
    ServiceWorkerUnsupported,
    ServiceWorkerTimeout
}

export class KnownError extends Error {
    constructor(public code: KnownErrorCode, ...args: ConstructorParameters<typeof Error>) {
        super(...args);
    }
}