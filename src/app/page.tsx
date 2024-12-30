"use client";

import { ReactNode, useEffect, useState } from "react";
import WebTorrent, { Instance } from "webtorrent";

import { MagnetPlayerWithFallback } from "./_page";
import { KnownError, KnownErrorCode } from "~/utils/KnownError";

const promiseWithTimeout = <T,>(promise: Promise<T>, ms: number): Promise<T> => (
    Promise.race<T>([
        promise,
        new Promise((_, reject): void => {
            setTimeout(reject, ms);
        })
    ])
);

const createClient = async (): Promise<Instance> => {
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

const Page = (): ReactNode => {
    const [clientPromise, setClientPromise] = useState<Promise<Instance>>();

    useEffect((): void => {
        // Since `createClient` needs to be called client-side only, we have to call it in a `useEffect` hook.
        setClientPromise(createClient());
    }, []);

    return <MagnetPlayerWithFallback clientPromise={clientPromise} />;
};

export default Page;
