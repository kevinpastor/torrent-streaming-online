// eslint-disable-next-line import/no-named-as-default
import WebTorrent, { type Instance } from "webtorrent";

import { ErrorCode, KnownError } from "~/utils/KnownError";
import { promiseWithTimeout } from "~/utils/promiseWithTimeout";

const getServiceWorker = async (): Promise<ServiceWorkerRegistration> => {
    if (!("serviceWorker" in navigator)) {
        throw new KnownError(ErrorCode.ServiceWorkerUnsupported);
    }

    const registration: ServiceWorkerRegistration = await navigator.serviceWorker.register("/sw.min.js");
    const serviceWorker: ServiceWorker | null = registration.installing ?? registration.waiting ?? registration.active;
    if (serviceWorker === null) {
        throw new KnownError(ErrorCode.ServiceWorkerNull);
    }

    if (serviceWorker.state === "activated" && navigator.serviceWorker.controller === null) {
        // Fixes an issue with hard reloads.
        window.location.reload();
    }

    if (serviceWorker.state !== "activated") {
        try {
            await promiseWithTimeout(
                new Promise((resolve): void => {
                    serviceWorker.addEventListener("statechange", ({ target }: Event): void => {
                        if (target === null || !("state" in target) || target.state !== "activated") {
                            return;
                        }

                        resolve(undefined);
                    });
                }),
                5000
            );
        }
        catch {
            throw new KnownError(ErrorCode.ServiceWorkerTimeout);
        }
    }

    return registration;
};

export const createClient = async (): Promise<Instance> => {
    const client: Instance = new WebTorrent();

    const registration: ServiceWorkerRegistration = await getServiceWorker();
    client.createServer({ controller: registration });

    return client;
};
