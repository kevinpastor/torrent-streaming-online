"use client";

import { type ReactNode, useEffect, useState } from "react";
import { type Instance } from "webtorrent";

import { createClient } from "~/utils/createClient";

import { MagnetPlayerWithFallback } from "./_page";

const Page = (): ReactNode => {
    const [clientPromise, setClientPromise] = useState<Promise<Instance>>();

    useEffect((): void => {
        // Since `createClient` can only be called client-side, we have to call it in a `useEffect` hook.
        setClientPromise(createClient());
    }, []);

    return <MagnetPlayerWithFallback clientPromise={clientPromise} />;
};

export default Page;
