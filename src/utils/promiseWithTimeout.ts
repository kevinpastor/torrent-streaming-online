export const promiseWithTimeout = <T>(promise: Promise<T>, ms: number): Promise<T> => (
    Promise.race<T>([
        promise,
        new Promise((_, reject): void => {
            setTimeout(reject, ms);
        })
    ])
);
