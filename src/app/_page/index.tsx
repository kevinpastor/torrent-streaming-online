import { ReactNode, Suspense } from "react"
import { ErrorBoundary } from "react-error-boundary";
import { Instance } from "webtorrent"

import { Client } from "./Client/Client";
import { ClientLoading } from "./ClientLoading";
import { ClientError } from "./ClientError";

interface Props {
    clientPromise?: Promise<Instance>
}

export const ClientWithFallback = ({ clientPromise }: Props): ReactNode => {
    // Because `clientPromise` is `undefined` on the server, we display the same fallback as when it will be pending on the client.
    if (clientPromise === undefined) {
        return <ClientLoading />
    }

    return (
        <ErrorBoundary fallback={<ClientError />}>
            <Suspense fallback={<ClientLoading />}>
                <Client clientPromise={clientPromise} />
            </Suspense>
        </ErrorBoundary>
    )
}
