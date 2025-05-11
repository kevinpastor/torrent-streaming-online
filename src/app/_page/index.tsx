import { type ReactNode, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { type Instance } from "webtorrent";

import { MagnetPlayer } from "./MagnetPlayer";
import { MagnetPlayerError } from "./MagnetPlayerError";
import { MagnetPlayerLoading } from "./MagnetPlayerLoading";

interface Props {
    clientPromise?: Promise<Instance>;
}

export const MagnetPlayerWithFallback = ({ clientPromise }: Props): ReactNode => {
    // Because `clientPromise` is `undefined` on the server, we display the same fallback as when it will be pending on the client.
    if (clientPromise === undefined) {
        return <MagnetPlayerLoading />;
    }

    return (
        <ErrorBoundary FallbackComponent={MagnetPlayerError}>
            <Suspense fallback={<MagnetPlayerLoading />}>
                <MagnetPlayer clientPromise={clientPromise} />
            </Suspense>
        </ErrorBoundary>
    );
};
