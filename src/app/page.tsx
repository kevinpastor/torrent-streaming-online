"use client"

import { ReactNode, useEffect, useState } from "react"
import WebTorrent, { Instance } from "webtorrent"

import { ClientWithFallback } from "./_components/ClientWithFallback";

const promiseWithTimeout = <T,>(promise: Promise<T>, ms: number): Promise<T> => (
    Promise.race<T>([
        promise,
        new Promise((_, reject) => {
            setTimeout(reject, ms);
        })
    ])
);

const createClient = async (): Promise<Instance> => {
    const registration = await navigator.serviceWorker.register('/sw.min.js')
    const serviceWorker = registration.installing || registration.waiting || registration.active
    if (serviceWorker === null) {
        throw new Error("TODO")
    }

    const client = new WebTorrent()

    if (serviceWorker.state === "activated") {
        if (navigator.serviceWorker.controller === null) {
            // Fixes an issue with hard reloads.
            window.location.reload()
        }

        client.createServer({ controller: registration })

        return client
    }

    await promiseWithTimeout(
        new Promise((resolve) => {
            serviceWorker.addEventListener("statechange", ({ target }) => {
                if (target === null || !("state" in target) || target.state !== "activated") {
                    return
                }

                resolve(undefined)
            })
        }),
        5000
    )

    client.createServer({ controller: registration })

    return client
}

const Page = (): ReactNode => {
    const [clientPromise, setClientPromise] = useState<Promise<Instance>>()

    useEffect((): void => {
        setClientPromise(createClient())
    }, [])

    return <ClientWithFallback clientPromise={clientPromise} />
}

export default Page;
