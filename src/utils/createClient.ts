// eslint-disable-next-line import/no-named-as-default
import WebTorrent, { type Instance } from "webtorrent";

import { KnownError, KnownErrorCode } from "~/utils/KnownError";
import { promiseWithTimeout } from "~/utils/promiseWithTimeout";

export const createClient = async (): Promise<Instance> => {
    const registration: ServiceWorkerRegistration = await navigator.serviceWorker.register("/sw.min.js");
    const serviceWorker: ServiceWorker | null = registration.installing || registration.waiting || registration.active;
    if (serviceWorker === null) {
        throw new KnownError(KnownErrorCode.ServiceWorkerUnsupported);
    }

    const client: Instance = new WebTorrent();

    if (serviceWorker.state === "activated") {
        if (navigator.serviceWorker.controller === null) {
            // Fixes an issue with hard reloads.
            window.location.reload();
        }

        client.createServer({ controller: registration });

        return client;
    }

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
    } catch {
        throw new KnownError(KnownErrorCode.ServiceWorkerTimeout);
    }

    client.createServer({ controller: registration });

    return client;
};