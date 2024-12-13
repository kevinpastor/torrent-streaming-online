import { ReactNode, Suspense } from "react"
import { ErrorBoundary } from "react-error-boundary";
import { Instance } from "webtorrent"

import { Client } from "./Client";
import { PagePendingFallback } from "./PagePendingFallback";

interface Props {
    clientPromise?: Promise<Instance>
}

export const ClientWithFallback = ({ clientPromise }: Props): ReactNode => {
    if (clientPromise === undefined) {
        return <PagePendingFallback />
    }

    return (
        <ErrorBoundary fallback={<p>An error occured while loading the client.</p>}>
            <Suspense fallback={<PagePendingFallback />}>
                <Client clientPromise={clientPromise} />
            </Suspense>
        </ErrorBoundary>
    )
}
